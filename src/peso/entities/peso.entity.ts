import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Vaca } from '../../vacas/entities/vaca.entity';

@Entity({name: 'peso'})
export class Peso {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    kgAnterior:number;
    @Column()
    lbAnterior:number;
    @OneToOne(()=> Vaca, vaca => vaca.peso)
    vaca: Vaca; 

    
}
