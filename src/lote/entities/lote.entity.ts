import { Auth } from "src/auth/entities/auth.entity";
import { Vaca } from "src/vacas/entities/vaca.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'lotes'})
export class Lote {

    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    nombreLote:string;
    @Column()
    descripcion:string;
    @Column()
    usuarioId:string;
    @OneToMany( () => Vaca , vaca => vaca.lote)
    vacas: Vaca[];
    @ManyToOne( () => Auth , auth => auth.lotes)
    usuario: Auth;


}
