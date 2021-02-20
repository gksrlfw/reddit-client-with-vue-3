import { IsEmail, IsOptional } from "class-validator"

export class UpdateDTO{
    @IsEmail()
    @IsOptional()
    email: string
}