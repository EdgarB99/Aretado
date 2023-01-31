import { IsString, IsUUID } from "class-validator";

export class UsuarioAndRaza{
    @IsString()
    id:string;
    @IsString()
    nombreRaza:string;
}