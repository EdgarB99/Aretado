import { IsString, MinLength, IsUUID, IsOptional } from 'class-validator';

export class UpdateLoteDto {

    @IsString()
    @MinLength(4)
    @IsOptional()
    nombreLote:string;
    @IsString()
    @MinLength(4)
    @IsOptional()
    descripcion:string;
    @IsString()
    @IsUUID()
    @IsOptional()
    usuarioId:string;
}
