import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacasService } from './vacas.service';
import { CreateVacaDto } from './dto/create-vaca.dto';
import { UpdateVacaDto } from './dto/update-vaca.dto';
import { UsuarioAndArete } from './dto/usuario-arete.dto';

@Controller('vacas')
export class VacasController {
  constructor(private readonly vacasService: VacasService) {}

  @Post()
  createVaca(@Body() vaca: CreateVacaDto) {
    return this.vacasService.createVaca(vaca);
  }

  @Post('arete')
  findVacaByAreteandUsuarioId(@Body() idandarete: UsuarioAndArete) {
    return this.vacasService.findVacaByAreteandUsuarioId(idandarete);
  }

  @Get()
  findAllVacas() {
    return this.vacasService.findAllVacas();
  }

  @Get('usuario/:id')
  findAllVacasByUsuarioId(@Param('id') id: string) {
    return this.vacasService.findAllVacasByUsuarioId(id);
  }
  
  @Get('lote/:id')
  findAllVacasByLoteId(@Param('id') id: string) {
    return this.vacasService.findAllVacasByLoteId(id);
  }

  @Get('raza/:id')
  findAllVacasByRazaId(@Param('id') id: string) {
    return this.vacasService.findAllVacasByRazaId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacasService.findVacaById(id);
  }

  @Patch(':id')
  updateVaca(@Param('id') id: string, @Body() vaca: UpdateVacaDto) {
    return this.vacasService.updateVaca(id,vaca);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacasService.remove(+id);
  }
}
