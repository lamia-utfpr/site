import { UnauthorizedException } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import IHashProvider from '@providers/HashProvider/models/IHashProvider';
import { classToClass } from 'class-transformer';
import { ILoginDTO } from '../dtos/ILogin.dto';
import IPayloadTokenDTO from '../dtos/IPayloadToken.dto';
import { IAuthResponse, IResponseLoginDTO } from '../dtos/IResponseLogin.dto';
import IRepositoryMember from '../repositories/IRepositoryMember';
import IRepositoryRefreshToken from '../repositories/IRepositoryRefreshToken';
import { EntityMember } from '../typeorm/entities/member.entity';
import { EntityRefreshToken } from '../typeorm/entities/refreshToken.entity';
import { RepositoryMember } from '../typeorm/repositories/member.repository';
import { RepositoryRefreshToken } from '../typeorm/repositories/refreshToken.repository';

@Injectable()
export class ServiceAuth {
  constructor(
    @InjectRepository(RepositoryMember)
    private readonly memberRepository: IRepositoryMember,

    @InjectRepository(RepositoryRefreshToken)
    private readonly refreshTokenRepository: IRepositoryRefreshToken,

    @Inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    private readonly jwtService: JwtService,
  ) {}

  async validate({
    username,
    password,
  }: ILoginDTO): Promise<EntityMember | null> {
    const member = await this.memberRepository.findByEmail(username);

    if (
      member &&
      (await this.hashProvider.compareHash(password, member.password))
    ) {
      return classToClass(member);
    }
    return null;
  }

  async login(member: EntityMember): Promise<IResponseLoginDTO> {
    const payload: IPayloadTokenDTO = {
      sub: member.id,
      login: member.login,
      patent: member.patent.name,
    };
    const hash = this.jwtService.sign(payload);

    const existValidToken = await this.refreshTokenRepository.findValidByLogin(
      member.login,
    );

    if (existValidToken) {
      await this.invalidateToken(existValidToken);
    }

    await this.refreshTokenRepository.createSave({
      hash,
      login: member.login,
    });

    return {
      auth: {
        accessToken: hash,
      },
      member,
    };
  }

  async refreshToken(oldToken: string): Promise<IAuthResponse> {
    const isValidToken = await this.refreshTokenRepository.findValidByHash(
      oldToken,
    );

    if (!isValidToken) {
      throw new UnauthorizedException();
    }

    const member = await this.memberRepository.findByLogin(isValidToken.login);

    if (!member) {
      throw new UnauthorizedException();
    }

    const newToken = (await this.login(member)).auth;

    return newToken;
  }

  private async invalidateToken(token: EntityRefreshToken): Promise<void> {
    await this.refreshTokenRepository.updateSave({
      ...token,
      status: false,
    });
  }
}
