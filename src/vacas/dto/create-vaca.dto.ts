import { IsString, MinLength,MaxLength, IsUUID, IsNumber, Min } from "class-validator";

export class CreateVacaDto {
    @IsString()
    @MinLength(4)
    arete:string;
    @IsString()
    fechaNacimiento:string;
    @IsString()
    fechaIngreso:string;
    @IsNumber()
    @Min(250)
    kg:number;
    @IsNumber()
    @Min(500)
    lb:number;
    @IsString()
    @IsUUID()
    usuarioId:string;
    @IsString()
    @IsUUID()
    loteId:string;
    @IsString()
    @IsUUID()
    razaId:string;
  
}
