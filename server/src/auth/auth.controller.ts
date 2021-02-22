import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { User } from 'src/decorator/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { LocalAuthGuard } from 'src/guards/auth-local.guard';
import { LoginDTO } from 'src/models/auth/login.dto';
import { RegisterDTO } from 'src/models/auth/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    @ApiCreatedResponse({ description: 'User registration'})
    @ApiBody({ type: RegisterDTO })
    async register(@Body() credentials: RegisterDTO) {
        const user = await this.authService.register(credentials);
        return user;
    }

    @Post('/login')
    @UseGuards(LocalAuthGuard)
    @ApiOkResponse({ description: 'User Login'})
    @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
    @ApiBody({ type: LoginDTO })
    async login(@User() users: UserEntity) {
        const user = await this.authService.login(users);
        return user;
    }

    @Get('/test')
    test() {
        return { message: 'hello!' };
    }
}
