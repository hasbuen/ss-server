import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from 'prisma/prisma.service';
import { Relationship } from 'src/@generated/prisma-nestjs-graphql/relationship/relationship.model';
import { RelationshipDTO } from './relationship.dto';

@Injectable()
export class RelationshipService {
    
  constructor(private prisma: PrismaService) {}

  private mapRelationshipDTOToCreateInput(relationshipDTO: RelationshipDTO): Prisma.relationshipsCreateInput {
    return {
        id_relationship: relationshipDTO.id_relationship,
        ticket_relationship: relationshipDTO.ticket_relationship,
        contact_relationship: relationshipDTO.contact_relationship,
        calls: { 
            connect: { 
                id_call: relationshipDTO.call_id 
            } 
        }
    };
  }
  
  async findAll(): Promise<Relationship[]> {
    return this.prisma.relationships.findMany()
  }

  async findById(id: string): Promise<Relationship | null> {
    return this.prisma.relationships.findUnique({ where: { id_relationship: id } });
  }

  async create
(relationshipDTO: RelationshipDTO): Promise<Relationship> {
    const relationshipCreateInput = this.mapRelationshipDTOToCreateInput(relationshipDTO);
    const createdRelationship = await this.prisma.relationships.create({ data: relationshipCreateInput });
    return plainToClass(Relationship, createdRelationship);
  }

  async update(id: string, relationshipDTO: RelationshipDTO): Promise<Relationship> {
    const relationshipUpdateInput = this.mapRelationshipDTOToCreateInput(relationshipDTO);
    const updatedRelationship = await this.prisma.relationships.update({
      where: { id_relationship: id },
      data: relationshipUpdateInput
    });
    return plainToClass(Relationship, updatedRelationship);
  }

  async delete(id: string): Promise<Relationship> {
    const deletedRelationship = await this.prisma.relationships.delete({ where: { id_relationship: id } });
    return plainToClass(Relationship, deletedRelationship);
  }
}