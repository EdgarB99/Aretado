import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RazaService } from './raza.service';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';
import { UsuarioAndRaza } from './dto/usuarioandraza.dto';

@Controller('raza')
export class RazaController {
  constructor(private readonly razaService: RazaService) {}

  @Post()
  createRaza(@Body() raza: CreateRazaDto) {
    return this.razaService.createRaza(raza);
  }

  @Post('nombre')
  findRazaByNameandId(@Body() idandname:UsuarioAndRaza){
    return this.razaService.findRazaByNameandId(idandname);
  }
  
  @Get()
  findAll() {
    return this.razaService.findAllRazas();
  }

  @Get('usuario/:id')
  findAllRazasByUsuarioId(@Param('id') id:string){
    return this.razaService.findAllRazasByUsuarioId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.razaService.findRazaById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() raza: UpdateRazaDto) {
    return this.razaService.updateRaza(id,raza);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.razaService.remove(+id);
  }
}
