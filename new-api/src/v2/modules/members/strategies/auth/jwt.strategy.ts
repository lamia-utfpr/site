import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import authConfig from '@config/auth';
import IPayloadTokenDTO from '@modules/members/dtos/IPayloadToken.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfig.jwt.secret,
    });
  }

  async validate(payload: IPayloadTokenDTO) {
    return { userId: payload.sub, username: payload.login };
  }
}
