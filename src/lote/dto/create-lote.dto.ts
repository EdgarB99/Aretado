
import { IsString, MinLength,MaxLength, IsUUID } from "class-validator";

export class CreateLoteDto {

    @IsString()
    @MinLength(4)
    nombreLote:string;
    @IsString()
    @MinLength(4)
    descripcion:string;
    @IsString()
    @IsUUID()
    usuarioId:string;
}
