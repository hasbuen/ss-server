import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { JwtService } from '../jwt/jwt.service';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    PrismaModule, 
    JwtModule
  ],
  providers: [
    OwnerService, 
    OwnerResolver, 
    PrismaService,
    JwtService
  ],
})
export class OwnerModule {}
