// Esta linha importa o módulo "Module" do "@nestjs/common".
import { Module } from '@nestjs/common';

// Esta linha importa o módulo "PrismaModule" do arquivo "prisma.module.ts".
import { PrismaModule } from 'prisma/prisma.module';

// Esta linha importa o serviço "PrismaService" do arquivo "prisma.service.ts".
import { PrismaService } from 'prisma/prisma.service';

// Esta linha importa o resolver "CallResolver" do arquivo "call.resolver.ts".
import { CallResolver } from './call.resolver';

// Esta linha importa o serviço "CallService" do arquivo "call.service.ts".
import { CallService } from './call.service';

// Esta linha importa o módulo "MulterModule" do "@nestjs/platform-express".
import { MulterModule } from '@nestjs/platform-express';

// Esta linha define um novo módulo com o decorador "@Module".
@Module({
  // Esta linha define os módulos importados pelo módulo atual: "PrismaModule" e "MulterModule".
  imports: [
    PrismaModule,
    MulterModule.register({
      dest: 'C:/Backup', // Substitua este caminho pelo diretório desejado.
    }),
  ],

  // Esta linha define os provedores disponíveis para injeção de dependência: "CallService", "CallResolver" e "PrismaService".
  providers: [CallService, CallResolver, PrismaService],
})
export class CallModule {}
