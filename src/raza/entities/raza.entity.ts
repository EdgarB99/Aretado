import { Auth } from 'src/auth/entities/auth.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Vaca } from '../../vacas/entities/vaca.entity';

@Entity({name: 'razas'})
export class Raza {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    nombreRaza:string;
    @Column()
    descripcion:string;
    @Column()
    usuarioId:string;
    @OneToMany( () => Vaca , vaca => vaca.raza)
    vacas: Vaca[];
    @ManyToOne( () => Auth , auth => auth.raza)
    usuario: Auth;
}
