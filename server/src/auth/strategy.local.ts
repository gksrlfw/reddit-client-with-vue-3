import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }

    async validate(email: string, password: string) {
        const user = await this.userRepository.findOne({ email });
        if(!user || !(await user.comparePassword(password)))
            throw new UnauthorizedException('Invalid credentials in find user or compare password');
        return user;
    }
}