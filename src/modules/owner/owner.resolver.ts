// Importando decorators para construção de resolvers GraphQL
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';

// Importando tipos gerados pelo Prisma
import { CreateOneownerArgs } from 'src/@generated/prisma-nestjs-graphql/owner/create-oneowner.args';
import { Owner } from 'src/@generated/prisma-nestjs-graphql/owner/owner.model';

// Importando DTO para validação de dados
import { OwnerDTO } from './owner.dto';

// Importando serviço de proprietários
import { OwnerService } from './owner.service';

// Definindo classe do resolver
@Resolver()
export class OwnerResolver {
  // Injetando serviço de proprietários no construtor
  constructor(private ownerService: OwnerService) {}

  // Definindo consulta GraphQL para obter todos os proprietários
  @Query(() => [Owner])
  async getAllOwneres(): Promise<Owner[]> {
    return this.ownerService.findAll();
  }

  // Definindo consulta GraphQL para obter um proprietário por ID
  @Query(() => Owner)
  async getOwnerById(@Args('id') id: string): Promise<Owner> {
    return this.ownerService.findById(id);
  }

  // Definindo mutação GraphQL para criar um novo proprietário
  @Mutation(() => Owner)
  async createOwner(@Args('data') data: CreateOneownerArgs): Promise<Owner> {
    return this.ownerService.create(data.data);
  }

  // Definindo mutação GraphQL para atualizar um proprietário existente
  @Mutation(() => Owner)
  async updateOwner(
    @Args('id') id: string,
    @Args('data') data: OwnerDTO,
  ): Promise<Owner> {
    return this.ownerService.update(id, data);
  }

  // Definindo mutação GraphQL para excluir um proprietário existente
  @Mutation(() => Owner)
  async deleteOwner(@Args('id') id: string): Promise<Owner> {
    return this.ownerService.delete(id);
  }
}
