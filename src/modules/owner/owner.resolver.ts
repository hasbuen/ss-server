import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateOneownerArgs } from 'src/@generated/prisma-nestjs-graphql/owner/create-oneowner.args';
import { Owner } from 'src/@generated/prisma-nestjs-graphql/owner/owner.model';
import { OwnerDTO } from './owner.dto';
import { OwnerService } from './owner.service';

@Resolver()
export class OwnerResolver {
  constructor(private ownerService: OwnerService) {}

  @Query(() => [Owner])
  async getAllOwneres(): Promise<Owner[]> {
    return this.ownerService.findAll();
  }

  @Query(() => Owner)
  async getOwnerById(@Args('id') id: string): Promise<Owner> {
    return this.ownerService.findById(id);
  }

  @Mutation(() => Owner)
  async createOwner(
    @Args('data') data: CreateOneownerArgs,
  ): Promise<Owner> {
    return this.ownerService.create(data.data);
  }

  @Mutation(() => Owner)
  async updateOwner(
    @Args('id') id: string,
    @Args('data') data: OwnerDTO,
  ): Promise<Owner> {
    return this.ownerService.update(id, data);
  }

  @Mutation(() => Owner)
  async deleteOwner(@Args('id') id: string): Promise<Owner> {
    return this.ownerService.delete(id);
  }
}