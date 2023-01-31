import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateAuthDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    nombre?:string;
    @IsString()
    @MinLength(1)
    @IsOptional()
    apellidoPaterno?:string;
    @IsString()
    @MinLength(1)
    @IsOptional()
    apellidoMaterno?:string;
    @IsString()
    @MinLength(1)
    @IsOptional()
    email?:string;
    @IsString()
    @MinLength(6)
    @IsOptional()
    password?:string;
    @IsString()
    @MinLength(6)
    @IsOptional()
    password2?:string;
}
