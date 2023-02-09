import { IsString, IsEmail, MinLength, Matches } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    @MinLength(6)
    @Matches('password')
    confirmPassword:string;
}
