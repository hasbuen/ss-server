// Importa o módulo Module do NestJS
import { Module } from '@nestjs/common';

// Importa o módulo PrismaModule
import { PrismaModule } from 'prisma/prisma.module';

// Importa o serviço PrismaService
import { PrismaService } from 'prisma/prisma.service';

// Importa o serviço OwnerService
import { OwnerService } from './owner.service';

// Importa o resolver OwnerResolver
import { OwnerResolver } from './owner.resolver';

// Importa o serviço JwtService do módulo jwt do NestJS
import { JwtService } from '../jwt/jwt.service';

// Importa o módulo JwtModule do NestJS
import { JwtModule } from '@nestjs/jwt/dist';

// Define a classe OwnerModule como um módulo do NestJS
@Module({
  // Importa os módulos PrismaModule e JwtModule
  imports: [PrismaModule, JwtModule],

  // Define os provedores de serviços para o OwnerModule
  providers: [OwnerService, OwnerResolver, PrismaService, JwtService],
})
export class OwnerModule {}
