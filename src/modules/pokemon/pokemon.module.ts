import { PokemonResolver } from './pokemon.resolver'
import { Module } from '@nestjs/common'
import { PokemonService } from './pokemon.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonEntity } from './pokemon.entity'

@Module({
	imports: [ TypeOrmModule.forFeature([ PokemonEntity ]) ],
	providers: [ PokemonResolver, PokemonService ]
})
export class PokemonModule {}