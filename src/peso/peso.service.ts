import { Injectable } from '@nestjs/common';
import { CreatePesoDto } from './dto/create-peso.dto';
import { UpdatePesoDto } from './dto/update-peso.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Peso } from './entities/peso.entity';
import { VacasService } from 'src/vacas/vacas.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { UpdateVacaDto } from '../vacas/dto/update-vaca.dto';
import { Vaca } from 'src/vacas/entities/vaca.entity';

@Injectable()
export class PesoService {

  constructor( @InjectRepository(Peso) private pesoRepository: Repository<Peso>,
               @InjectRepository(Vaca) private vacasRepository: Repository<Vaca>){}

  async createPeso(id:string, peso: CreatePesoDto) {

    const vacaFound = await this.vacasRepository.findOne({
      where:{
        id
      }
    })
   

    if(!vacaFound){
      throw new HttpException('No se encontró a la vaca', HttpStatus.NOT_FOUND);
    }

    const nuevoPeso = this.pesoRepository.create(peso);
    const savedVaca = await this.pesoRepository.save(nuevoPeso);

    vacaFound.peso=savedVaca;

    return this.vacasRepository.save(vacaFound);
  }


  findAllPeso() {
    return this.pesoRepository.find();
  }

  async findPesoById(id: string) {
    const pesoFound = await this.pesoRepository.findOne({
      where:{
        id
      }
    });

    if(!pesoFound){
      throw new HttpException('No se encontró el peso', HttpStatus.NOT_FOUND);
    }

    return pesoFound;
  }


  async updatePeso(id: string, peso: UpdatePesoDto) {
    
    const pesoFound = await this.pesoRepository.findOne({
      where:{
          id:id
      }
  });

  if(!pesoFound){
      throw new HttpException('Peso no encontrado', HttpStatus.NOT_FOUND);
  }

  const updatedPeso = Object.assign(pesoFound,peso);

  return this.pesoRepository.save(updatedPeso);
  }

  update(id: number, updatePesoDto: UpdatePesoDto) {
    return `This action updates a #${id} peso`;
  }

  remove(id: number) {
    return `This action removes a #${id} peso`;
  }
}
