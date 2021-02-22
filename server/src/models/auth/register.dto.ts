import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";
import { LoginDTO } from "./login.dto";

export class RegisterDTO extends LoginDTO {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @ApiProperty({ type: String, description: 'username' })
    username: string;
}