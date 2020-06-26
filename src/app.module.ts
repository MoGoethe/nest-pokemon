import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from './modules/pokemon/pokemon.module'
import { PokemonEntity } from "./modules/pokemon/pokemon.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "123456789",
      "database": "nest3",
      "synchronize": true,
      "logging": false,
      "entities": [PokemonEntity]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gpl'
    }),
    PokemonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
