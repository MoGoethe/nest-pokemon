import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Field, ObjectType} from 'type-graphql'

@ObjectType()
@Entity('pokemon')
export class PokemonEntity {

	@Field()
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Field()
	@Column('varchar', { length: 500, unique: true })
	name: string

	@Field()
	@Column('varchar', { length: 500 })
	type: string

	@Field()
	@Column('numeric')
	pokedex: number
}
