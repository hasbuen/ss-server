// Importa o módulo 'Module' do NestJS
import { Module } from '@nestjs/common';
// Importa o módulo 'PrismaModule'
import { PrismaModule } from 'prisma/prisma.module';
// Importa o serviço 'PrismaService'
import { PrismaService } from 'prisma/prisma.service';
// Importa o resolver 'RelationshipResolver'
import { RelationshipResolver } from './relationship.resolver';
// Importa o serviço 'RelationshipService'
import { RelationshipService } from './relationship.service';

// Define o módulo 'RelationshipModule'
@Module({
  // Importa o módulo 'PrismaModule'
  imports: [PrismaModule],
  // Define os provedores de serviços do módulo
  providers: [
    RelationshipService, // Provedor do serviço 'RelationshipService'
    RelationshipResolver, // Provedor do resolver 'RelationshipResolver'
    PrismaService, // Provedor do serviço 'PrismaService'
  ],
})

// Exporta a classe 'RelationshipModule'
export class RelationshipModule {}
