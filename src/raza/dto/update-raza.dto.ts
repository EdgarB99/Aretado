import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';


export class UpdateRazaDto {
    @IsString()
    @MinLength(4)
    @IsOptional()
    nombreRaza:string;
    @IsString()
    @MinLength(4)
    @IsOptional()
    descripcion:string;
    @IsString()
    @IsUUID()
    @IsOptional()
    usuarioId:string;
}
