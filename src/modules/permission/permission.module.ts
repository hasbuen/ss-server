import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';

@Module({
  imports: [PrismaModule],
  providers: [
    PermissionService, 
    PermissionResolver, 
    PrismaService
  ],
})

export class PermissionModule {}