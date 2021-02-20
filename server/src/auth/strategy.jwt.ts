import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Token'),
            secretOrKey: process.env.SECRET,
            ignoreExpiration: false
        });
    }

    async validate(payload: any) {
        return { email: payload.email, id: payload.id, username: payload.username };
    }
}