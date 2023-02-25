// Importing necessary modules and services
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateOnerelationshipArgs } from 'src/@generated/prisma-nestjs-graphql/relationship/create-onerelationship.args';
import { Relationship } from 'src/@generated/prisma-nestjs-graphql/relationship/relationship.model';
import { RelationshipDTO } from './relationship.dto';
import { RelationshipService } from './relationship.service';

// Defining RelationshipResolver class
@Resolver()
export class RelationshipResolver {
  // Initializing RelationshipService class in constructor
  constructor(private relationshipService: RelationshipService) {}

  // Defining GraphQL query to get all relationships
  @Query(() => [Relationship])
  async getAllRelationshipes(): Promise<Relationship[]> {
    return this.relationshipService.findAll();
  }

  // Defining GraphQL query to get relationship by ID
  @Query(() => Relationship)
  async getRelationshipById(@Args('id') id: string): Promise<Relationship> {
    return this.relationshipService.findById(id);
  }

  // Defining GraphQL mutation to create a new relationship
  @Mutation(() => Relationship)
  async createRelationship(
    @Args('data') data: CreateOnerelationshipArgs,
  ): Promise<Relationship> {
    return this.relationshipService.create(data.data);
  }

  // Defining GraphQL mutation to update an existing relationship
  @Mutation(() => Relationship)
  async updateRelationship(
    @Args('id') id: string,
    @Args('data') data: RelationshipDTO,
  ): Promise<Relationship> {
    return this.relationshipService.update(id, data);
  }

  // Defining GraphQL mutation to delete an existing relationship
  @Mutation(() => Relationship)
  async deleteRelationship(@Args('id') id: string): Promise<Relationship> {
    return this.relationshipService.delete(id);
  }
}
