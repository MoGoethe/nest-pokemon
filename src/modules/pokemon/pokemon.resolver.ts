import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PokemonEntity } from './pokemon.entity'
import { CreatePokemonDto } from './dto/create-pokemon.dto'
import { PokemonService } from './pokemon.service'
import { inputPokemon } from './input/pokemon.input'

@Resolver((_of: any) => PokemonEntity)
export class PokemonResolver {
	constructor (private readonly pokemonService: PokemonService) {}

	@Query(() => [ CreatePokemonDto ])
	async pokemon () {
		return this.pokemonService.getPokemons()
	}

	@Mutation(() => CreatePokemonDto)
	async createPokemon (@Args('data') data: inputPokemon) {
		return this.pokemonService.createPokemon(data)
	}
}