import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ServiceAuth } from '../../services/auth.service';
import { EntityMember } from '@modules/members/typeorm/entities/member.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: ServiceAuth) {
    super();
  }

  async validate(username: string, password: string): Promise<EntityMember> {
    const member = await this.authService.validate({
      username,
      password,
    });

    if (!member) {
      throw new UnauthorizedException();
    }
    return member;
  }
}
