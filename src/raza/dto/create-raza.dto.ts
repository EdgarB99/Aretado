
import { IsString, MinLength,MaxLength, IsUUID } from "class-validator";

export class CreateRazaDto {

    @IsString()
    @MinLength(4)
    nombreRaza:string;
    @IsString()
    @MinLength(4)
    descripcion:string;
    @IsString()
    @IsUUID()
    usuarioId:string;
}
