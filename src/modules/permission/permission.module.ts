// Importa o módulo "Module" do pacote "@nestjs/common"
import { Module } from '@nestjs/common';

// Importa o módulo "PrismaModule" do arquivo "prisma.module"
import { PrismaModule } from 'prisma/prisma.module';

// Importa o serviço "PrismaService" do arquivo "prisma.service"
import { PrismaService } from 'prisma/prisma.service';

// Importa o resolver "PermissionResolver" do arquivo "permission.resolver"
import { PermissionResolver } from './permission.resolver';

// Importa o serviço "PermissionService" do arquivo "permission.service"
import { PermissionService } from './permission.service';

// Define um módulo "PermissionModule"
@Module({

// Importa o módulo "PrismaModule" para dentro do módulo "PermissionModule"
imports: [PrismaModule],

// Define os provedores (serviços e resolvers) do módulo "PermissionModule"
providers: [
PermissionService,
PermissionResolver,
PrismaService
],
})

// Exporta a classe "PermissionModule"
export class PermissionModule {}