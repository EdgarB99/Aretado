import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoteService } from './lote.service';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { UsuarioAndLote } from './dto/usuarioandlote.dto';

@Controller('lote')
export class LoteController {
  constructor(private readonly loteService: LoteService) {}

  @Post()
  createLote(@Body() lote: CreateLoteDto) {
    return this.loteService.createLote(lote);
  }

  @Get()
  findAllLotes() {
    return this.loteService.findAllLotes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loteService.findLoteById(id);
  }

  @Get('usuario/:id')
  findAllLotesByUsuarioId(@Param('id') id:string){
    return this.loteService.findAllLotesByUsuarioId(id);
  }

  @Post('nombre')
  findLoteByNameandId(@Body() idandname: UsuarioAndLote ) {
    return this.loteService.findLoteByNameandId(idandname);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() lote: UpdateLoteDto) {
    return this.loteService.updateLote(id, lote);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loteService.remove(+id);
  }
}
