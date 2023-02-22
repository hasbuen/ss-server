import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateOnerelationshipArgs } from 'src/@generated/prisma-nestjs-graphql/relationship/create-onerelationship.args';
import { Relationship } from 'src/@generated/prisma-nestjs-graphql/relationship/relationship.model';
import { RelationshipDTO } from './relationship.dto';
import { RelationshipService } from './relationship.service';

@Resolver()
export class RelationshipResolver {
  constructor(private relationshipService: RelationshipService) {}

  @Query(() => [Relationship])
  async getAllRelationshipes(): Promise<Relationship[]> {
    return this.relationshipService.findAll();
  }

  @Query(() => Relationship)
  async getRelationshipById(@Args('id') id: string): Promise<Relationship> {
    return this.relationshipService.findById(id);
  }

  @Mutation(() => Relationship)
  async createRelationship(
    @Args('data') data: CreateOnerelationshipArgs,
  ): Promise<Relationship> {
    return this.relationshipService.create(data.data);
  }

  @Mutation(() => Relationship)
  async updateRelationship(
    @Args('id') id: string,
    @Args('data') data: RelationshipDTO,
  ): Promise<Relationship> {
    return this.relationshipService.update(id, data);
  }

  @Mutation(() => Relationship)
  async deleteRelationship(@Args('id') id: string): Promise<Relationship> {
    return this.relationshipService.delete(id);
  }
}