// Importa os decorators Args, Mutation, Query e Resolver do pacote @nestjs/graphql
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

// Importa o serviço BossService e o DTO BossDTO do arquivo boss.service.ts
import { BossService } from './boss.service';
import { BossDTO } from './boss.dto';

// Importa o argumento CreateOnebossArgs e o modelo Boss do Prisma
import { CreateOnebossArgs } from 'src/@generated/prisma-nestjs-graphql/boss/create-oneboss.args';
import { Boss } from 'src/@generated/prisma-nestjs-graphql/boss/boss.model';

// Define uma classe BossResolver com o decorator @Resolver
@Resolver()
export class BossResolver {
    constructor(private bossService: BossService) { }

    // Define um método assíncrono getAllBosses com o decorator @Query que retorna um array de Boss
    @Query(() => [Boss])
    async getAllBosses(): Promise<Boss[]> {
        // Chama o método findAll do serviço BossService
        return this.bossService.findAll();
    }

    // Define um método assíncrono getBossById com o decorator @Query que retorna um objeto Boss
    @Query(() => Boss)
    async getBossById(@Args('id') id: string): Promise<Boss> {
        // Chama o método findById do serviço BossService passando o argumento id
        return this.bossService.findById(id);
    }

    // Define um método assíncrono createBoss com o decorator @Mutation que retorna um objeto Boss
    @Mutation(() => Boss)
    async createBoss(
        @Args('data') data: CreateOnebossArgs,
    ): Promise<Boss> {
        // Chama o método create do serviço BossService passando o argumento data
        return this.bossService.create(data.data);
    }

    // Define um método assíncrono updateBoss com o decorator @Mutation que retorna um objeto Boss
    @Mutation(() => Boss)
    async updateBoss(
        @Args('id') id: string,
        @Args('data') data: BossDTO,
    ): Promise<Boss> {
        // Chama o método update do serviço BossService passando os argumentos id e data
        return this.bossService.update(id, data);
    }

    // Define um método assíncrono deleteBoss com o decorator @Mutation que retorna um objeto Boss
    @Mutation(() => Boss)
    async deleteBoss(@Args('id') id: string): Promise<Boss> {
        // Chama o método delete do serviço BossService passando o argumento id
        return this.bossService.delete(id);
    }
}