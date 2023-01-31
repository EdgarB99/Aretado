import { Injectable } from '@nestjs/common';
import { CreateVacaDto } from './dto/create-vaca.dto';
import { UpdateVacaDto } from './dto/update-vaca.dto';
import { Vaca } from './entities/vaca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from '../auth/auth.service';
import { UsuarioAndArete } from './dto/usuario-arete.dto';

@Injectable()
export class VacasService {

  constructor( @InjectRepository(Vaca) private vacasRepository: Repository<Vaca>,
                private authService:AuthService ){}

  async createVaca(vaca: CreateVacaDto) {
    console.log(vaca);

    const usuarioFound = await this.authService.findUsuarioById(vaca.usuarioId);

    const areteFound = await this.vacasRepository.findOne({
      where:{
          arete:vaca.arete,
          usuarioId:vaca.usuarioId
      }
  });

  
  if(!usuarioFound){
    return new HttpException('No se encontró el usuario',HttpStatus.NOT_FOUND);
  }

  if(areteFound){
    throw new HttpException( `El arete ya es usado por otra vaca` ,403);
}

  const nuevaVaca = this.vacasRepository.create(vaca);
  return this.vacasRepository.save(nuevaVaca);
}


  findAllVacas() {
    return this.vacasRepository.find({
      relations:['mesPeso','peso']
    });
  }

  async findAllVacasByUsuarioId(id:string){
    const vacas = await this.vacasRepository.find({
      where:{
        usuarioId:id
      }
    });

    if(!vacas){
      throw new HttpException('El id del usuario no existe', HttpStatus.CONFLICT);
    }

    return vacas;

  }

  async findAllVacasByLoteId(id:string){
    const vacas = await this.vacasRepository.find({
      where:{
        loteId:id
      },
      relations:['mesPeso','peso']
    });

    if(!vacas){
      throw new HttpException('El id del lote no existe', HttpStatus.CONFLICT);
    }

    return vacas;

  }

  async findAllVacasByRazaId(id:string){
    const vacas = await this.vacasRepository.find({
      where:{
        razaId:id
      },
      relations:{
        peso:true
      }
    });

    if(!vacas){
      throw new HttpException('El id de la raza no existe', HttpStatus.CONFLICT);
    }

    return vacas;

  }

  
  async findVacaById(id: string) {
    const vacaFound = await this.vacasRepository.findOne({
      where:{
          id:id
      },
      relations:{
        peso:true
      }
  });

  if(!vacaFound){
    return new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
}

return vacaFound;
}

async findVacaByAreteandUsuarioId(idandarete:UsuarioAndArete) {

  const vacaFound = await this.vacasRepository.findOne({
    where:{
        arete:idandarete.arete,
        usuarioId:idandarete.id
    },
    relations:['mesPeso','peso']
  });

  if(!vacaFound){
    throw new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
  }

  return vacaFound;

}

async updateVaca(id: string, peso: UpdateVacaDto) {
    
  const vacaFound = await this.vacasRepository.findOne({
    where:{
        id:id
    }
});

if(!vacaFound){
    throw new HttpException('Vaca no encontrada', HttpStatus.NOT_FOUND);
}

const updatedVaca = Object.assign(vacaFound,peso);

return this.vacasRepository.save(updatedVaca);
}

  update(id: number, updateVacaDto: UpdateVacaDto) {
    return `This action updates a #${id} vaca`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaca`;
  }
}
