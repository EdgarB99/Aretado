import { Peso } from 'src/peso/entities/peso.entity';
import { Raza } from 'src/raza/entities/raza.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { Auth } from '../../auth/entities/auth.entity';
import { Lote } from '../../lote/entities/lote.entity';
import { MesPeso } from '../../mes-peso/entities/mes-peso.entity';

@Entity({name: 'vacas'})
export class Vaca {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    arete:string;
    @Column()
    fechaNacimiento:string;
    @Column()
    fechaIngreso:string;
    @Column()
    kg:number;
    @Column()
    lb:number;
    @Column()
    usuarioId:string;
    @Column()
    loteId:string;
    @Column()
    razaId:string;
  

    @ManyToOne(()=> Lote, lote => lote.vacas)
    lote: Lote;
    
    @ManyToOne(()=> Raza, raza => raza.vacas)
    raza: Raza;
    
    @OneToOne(()=> Peso, peso => peso.vaca)
    @JoinColumn()
    peso: Peso;
    
    @OneToMany(()=> MesPeso, mesPeso => mesPeso.vaca)
    mesPeso: MesPeso[];    

    @ManyToOne( () => Auth , auth => auth.vacas)
    usuario: Auth;
}
