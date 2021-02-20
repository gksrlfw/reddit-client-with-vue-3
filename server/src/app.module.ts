import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseConnectionService } from './database-connection.service';

@Module({
  imports: [UsersModule, TypeOrmModule.forRootAsync({
    useClass: DatabaseConnectionService
  }), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
