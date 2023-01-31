import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PesoService } from './peso.service';
import { CreatePesoDto } from './dto/create-peso.dto';
import { UpdatePesoDto } from './dto/update-peso.dto';

@Controller('peso')
export class PesoController {
  constructor(private pesoService: PesoService) {}

  @Post(':id/peso')
  createPeso(@Param('id') id:string ,@Body() peso: CreatePesoDto) {
    return this.pesoService.createPeso(id,peso);
  }

  @Get()
  findAllPeso() {
    return this.pesoService.findAllPeso();
  }

  @Get(':id')
  findPesoById(@Param('id') id: string) {
    return this.pesoService.findPesoById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() peso: UpdatePesoDto) {
    return this.pesoService.updatePeso(id,peso);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pesoService.remove(+id);
  }
}
