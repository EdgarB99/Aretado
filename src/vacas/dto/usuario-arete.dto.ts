import { IsString, IsUUID } from "class-validator";

export class UsuarioAndArete{
    @IsString()
    id:string;
    @IsString()
    arete:string;
}