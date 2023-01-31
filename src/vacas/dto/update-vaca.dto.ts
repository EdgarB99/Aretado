import { IsString, MinLength, MaxLength, IsUUID, IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateVacaDto {
    @IsString()
    @MinLength(4)
    @IsOptional()
    arete?:string;
    @IsString()
    @IsOptional()
    fechaNacimiento?:string;
    @IsString()
    @IsOptional()
    fechaIngreso?:string;
    @IsNumber()
    @Min(250)
    @IsOptional()
    kg?:number;
    @IsNumber()
    @Min(500)
    @IsOptional()
    lb?:number;
    @IsString()
    @IsUUID()
    @IsOptional()
    usuarioId?:string;
    @IsString()
    @IsUUID()
    @IsOptional()
    loteId?:string;
    @IsString()
    @IsUUID()
    @IsOptional()
    razaId?:string;
  
}
