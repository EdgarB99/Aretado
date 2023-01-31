import { IsNumber, IsOptional, Min } from 'class-validator';


export class UpdatePesoDto {
    @IsNumber()
    @Min(250)
    @IsOptional()
    kgAnterior?:number;
    @IsNumber()
    @Min(250)
    @IsOptional()
    lbAnterior?:number;
}
