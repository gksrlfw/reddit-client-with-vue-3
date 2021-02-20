import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/decorator/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { LocalAuthGuard } from 'src/guards/auth-local.guard';
import { LoginDTO } from 'src/models/auth/login.dto';
import { RegisterDTO } from 'src/models/auth/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post()
    async register(@Body() credentials: { user: RegisterDTO }) {
        const user = await this.authService.register(credentials.user);
        return user;
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@User() users: UserEntity) {
        const user = await this.authService.login(users);
        return user;
    }

    @Get('/test')
    test() {
        return { message: 'hello!' };
    }
}
