import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { RelationshipResolver } from './relationship.resolver';
import { RelationshipService } from './relationship.service';

@Module({
  imports: [PrismaModule],
  providers: [
    RelationshipService, 
    RelationshipResolver, 
    PrismaService
  ],
})

export class RelationshipModule {}