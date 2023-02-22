import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { CallResolver } from './call.resolver';
import { CallService } from './call.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      dest: 'C:/Backup' // Substitua este caminho pelo diretório desejado.
    }),
  ],
  providers: [CallService, CallResolver, PrismaService],
})
export class CallModule {}
