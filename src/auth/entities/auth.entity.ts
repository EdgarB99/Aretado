import { Lote } from "src/lote/entities/lote.entity";
import { Raza } from "src/raza/entities/raza.entity";
import { Vaca } from "src/vacas/entities/vaca.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class Auth{

    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    nombre: string;
    @Column()
    apellidoPaterno: string;
    @Column()
    apellidoMaterno: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    password2: string;
    @OneToMany(()=> Vaca, vaca => vaca.usuario)
    vacas: Vaca[];
    @OneToMany(()=> Lote,  lote=> lote.usuario )
    lotes: Lote[];
    @OneToMany(()=> Raza,  raza=> raza.usuario )
    raza: Raza[];

}