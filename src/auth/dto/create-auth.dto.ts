import { IsString, MinLength,MaxLength } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @MinLength(1)
    nombre:string;
    @IsString()
    @MinLength(1)
    apellidoPaterno:string;
    @IsString()
    @MinLength(1)
    apellidoMaterno:string;
    @IsString()
    @MinLength(1)
    email:string;
    @IsString()
    @MinLength(6)
    password:string;
    @IsString()
    @MinLength(6)
    password2:string;

}
