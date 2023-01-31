import { Module } from '@nestjs/common';
import { VacasService } from './vacas.service';
import { VacasController } from './vacas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaca } from './entities/vaca.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vaca]), AuthModule],
  controllers: [VacasController],
  providers: [VacasService],
  exports:[VacasService]
})
export class VacasModule {}
