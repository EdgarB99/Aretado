import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VacasModule } from './vacas/vacas.module';
import { LoteModule } from './lote/lote.module';
import { RazaModule } from './raza/raza.module';
import { PesoModule } from './peso/peso.module';
import { MesPesoModule } from './mes-peso/mes-peso.module';
import { Auth } from './auth/entities/auth.entity';
import { Vaca } from './vacas/entities/vaca.entity';
import { Lote } from './lote/entities/lote.entity';
import { Raza } from './raza/entities/raza.entity';
import { Peso } from './peso/entities/peso.entity';
import { MesPeso } from './mes-peso/entities/mes-peso.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'passworddb',
      database: 'vacasdb',
      entities: [Auth, Vaca, Lote, Raza, Peso, MesPeso],
      synchronize: true,
    }),
 
    AuthModule,
    VacasModule,
    LoteModule,
    RazaModule,
    PesoModule,
    MesPesoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
