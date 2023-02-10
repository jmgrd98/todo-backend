import { IsString, IsEmail, MinLength, Matches, Validate } from "class-validator";
import { User } from "../entities/user.entity";

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
    @Validate(password)
    confirmPassword:string;
}
