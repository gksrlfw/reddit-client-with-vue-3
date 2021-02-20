import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { RegisterDTO } from 'src/models/auth/register.dto';
import { AuthResponse } from 'src/models/auth/response.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) {}

    async register(credentials: RegisterDTO): Promise<AuthResponse> {
        try {
            const user = this.userRepository.create(credentials);
            await user.save();
            const payload = { username: user.username };
            const token = this.jwtService.sign(payload);
            return { ...user.toJSON(), token };
        }
        catch(err) {
            if(err.code === '23505')
                throw new ConflictException('Username has already been taken');
            throw new InternalServerErrorException();
        }
    }

    async login(user: UserEntity): Promise<AuthResponse> {
        try {
            const payload = { email: user.email, id: user.id, username: user.username };
            const token = this.jwtService.sign(payload);
            return { ...user.toJSON(), token };
        }
        catch(err) {
            throw new InternalServerErrorException();
        }
    }
}
