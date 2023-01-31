import { Injectable } from '@nestjs/common';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lote } from './entities/lote.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from '../auth/auth.service';
import { UsuarioAndLote } from './dto/usuarioandlote.dto';

@Injectable()
export class LoteService {

  constructor( @InjectRepository(Lote) private lotesRepository: Repository<Lote>,
                private authService:AuthService){}

  async createLote(lote: CreateLoteDto) {
    
    const usuarioFound = await this.authService.findUsuarioById(lote.usuarioId);
    const loteFound = await this.lotesRepository.findOne({
      where:{
          nombreLote:lote.nombreLote,
          usuarioId:lote.usuarioId
      },
  });

  if(!usuarioFound){
    return new HttpException('No se encontró el usuario',HttpStatus.NOT_FOUND);
  }

    if(loteFound){
       throw new HttpException('Este lote ya existe', HttpStatus.CONFLICT)
    }

    const nuevoLote = this.lotesRepository.create(lote);
    return this.lotesRepository.save(nuevoLote);
  }

  findAllLotes() {
    return this.lotesRepository.find();
  }

  async findAllLotesByUsuarioId(id:string){
    const lotes = await this.lotesRepository.find({
      where:{
        usuarioId:id
      }
    });

    if(!lotes){
      throw new HttpException('El id del usuario no existe', HttpStatus.CONFLICT);
    }

    return lotes;

  }

  async findLoteById(id: string) {
    const loteFound = await this.lotesRepository.findOne({
      where:{
          id:id
      },
  });

  if(!loteFound){
      return new HttpException('Lote no encontrado', HttpStatus.NOT_FOUND);
  }
  return loteFound;

  }

  async findLoteByNameandId(idandname:UsuarioAndLote) {

    const loteFound = await this.lotesRepository.findOne({
      where:{
          nombreLote:idandname.nombreLote,
          usuarioId:idandname.id
      },
  });

  if(!loteFound){
    return new HttpException('Lote no encontrado', HttpStatus.NOT_FOUND);
  }
  return loteFound;

  }

  async updateLote(id: string, lote: UpdateLoteDto) {
   
    const loteFound = await this.lotesRepository.findOne({
      where:{
          id:id
      }
  });

  if(!loteFound){
      return new HttpException('Lote no encontrado', HttpStatus.NOT_FOUND);
  }

  const updatedLote = Object.assign(loteFound,lote);

  return this.lotesRepository.save(updatedLote);
  }

  remove(id: number) {
    return `This action removes a #${id} lote`;
  }
}
