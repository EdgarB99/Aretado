import { IsString, MinLength,MaxLength, IsUUID, IsNumber, Min } from "class-validator";

export class CreatePesoDto {
    @IsNumber()
    @Min(250)
    kgAnterior:number;
    @IsNumber()
    @Min(250)
    lbAnterior:number;
}
