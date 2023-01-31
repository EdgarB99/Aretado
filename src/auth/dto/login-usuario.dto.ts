import { IsString, MinLength } from "class-validator";

export class LoginUsuarioDto{
    @IsString()
    email:string;
    @IsString()
    @MinLength(6)
    password:string;
}