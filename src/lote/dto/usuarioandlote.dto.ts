import { IsString, IsUUID } from "class-validator";

export class UsuarioAndLote{
    @IsString()
    id:string;
    @IsString()
    nombreLote:string;
}