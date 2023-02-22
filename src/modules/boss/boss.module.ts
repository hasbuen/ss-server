// Este código importa módulos e serviços necessários para a criação do módulo Boss

// Importa o decorator Module do NestJS
import { Module } from '@nestjs/common';

// Importa o serviço BossService
import { BossService } from './boss.service';

// Importa o resolver BossResolver
import { BossResolver } from './boss.resolver';

// Importa o módulo PrismaModule
import { PrismaModule } from 'prisma/prisma.module';

// Importa o serviço PrismaService
import { PrismaService } from 'prisma/prisma.service';

// Importa o serviço JwtService
import { JwtService } from '../jwt/jwt.service';

// Importa o módulo JwtModule
import { JwtModule } from '../jwt/jwt.module';

// Define o módulo BossModule
@Module({
  // Importa os módulos PrismaModule e JwtModule
  imports: [PrismaModule, JwtModule],

  // Define os provedores de serviços do módulo
  providers: [BossService, BossResolver, PrismaService, JwtService],
})
export class BossModule {}
