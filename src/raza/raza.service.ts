import { Injectable } from '@nestjs/common';
import { CreateRazaDto } from './dto/create-raza.dto';
import { UpdateRazaDto } from './dto/update-raza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Raza } from './entities/raza.entity';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { UsuarioAndRaza } from './dto/usuarioandraza.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class RazaService {
  
  constructor( @InjectRepository(Raza) private razasRepository: Repository<Raza>,
                private authService:AuthService){}

  async createRaza(raza: CreateRazaDto) {
    const usuarioFound = await this.authService.findUsuarioById(raza.usuarioId);
    const razaFound = await this.razasRepository.findOne({
      where:{
        nombreRaza:raza.nombreRaza,
        usuarioId:raza.usuarioId
      }
    })

    if(!usuarioFound){
      throw new HttpException('No se encontró el usuario',HttpStatus.NOT_FOUND);
    }

    if(razaFound){
      throw new HttpException('Esta raza ya existe', HttpStatus.CONFLICT);
    }

    const nuevaRaza = this.razasRepository.create(raza);
    return this.razasRepository.save(nuevaRaza);
  }

  findAllRazas() {
    return this.razasRepository.find();
  }

  async findAllRazasByUsuarioId(id:string) {
    const razas = await this.razasRepository.find({
      where:{
        usuarioId:id
      }
    });

    if(!razas){
      throw new HttpException('El id del usuario no existe', HttpStatus.CONFLICT);
    }

    return razas;

  }

  async findRazaById(id: string) {
    const razaFound = await this.razasRepository.findOne({
      where:{
          id:id
      },
  });

  if(!razaFound){
    throw new HttpException('Raza no encontrada', HttpStatus.NOT_FOUND);
  }
  return razaFound;
  }


  async findRazaByNameandId(idandname:UsuarioAndRaza) {

    const razaFound = await this.razasRepository.findOne({
      where:{
          nombreRaza:idandname.nombreRaza,
          usuarioId:idandname.id
      },
  });

  if(!razaFound){
    throw new HttpException('Raza no encontrada', HttpStatus.NOT_FOUND);
  }
  return razaFound;
}

  async updateRaza(id: string, raza: UpdateRazaDto) {
    
    const razaFound = await this.razasRepository.findOne({
      where:{
          id:id
      }
  });

  if(!razaFound){
      throw new HttpException('Raza no encontrada', HttpStatus.NOT_FOUND);
  }

  const updatedRaza = Object.assign(razaFound,raza);

  return this.razasRepository.save(updatedRaza);
  }

  remove(id: number) {
    return `This action removes a #${id} raza`;
  }
}
