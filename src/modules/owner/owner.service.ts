import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from 'prisma/prisma.service';
import { Owner } from 'src/@generated/prisma-nestjs-graphql/owner/owner.model';
import { OwnerDTO } from './owner.dto';
import * as crypto from 'crypto';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class OwnerService {
    
  constructor(
    private prisma: PrismaService,
    private JwtService: JwtService
    ) {}

  private mapOwnerDTOToCreateInput(ownerDTO: OwnerDTO): Prisma.ownersCreateInput {
    const hashedPassword = crypto.createHash('md5').update(ownerDTO.password_owner).digest('hex'); 
    const id = uuidv4();
    
    return {
      id_owner: id,
      username_owner: ownerDTO.username_owner,
      password_owner: hashedPassword,
      email_owner: ownerDTO.email_owner,
      boss: { connect: { id_boss: ownerDTO.boss_id } }
    };
  }
  
  async findAll(): Promise<Owner[]> {
    return this.prisma.owners.findMany();
  }

  async findById(id: string): Promise<Owner | null> {
    return this.prisma.owners.findUnique({ where: { id_owner: id } });
  }

  async create
(ownerDTO: OwnerDTO): Promise<Owner> {
    const ownerCreateInput = this.mapOwnerDTOToCreateInput(ownerDTO);
    
    const token = (await this.JwtService.sign({ sub: ownerCreateInput.id_owner })).toString();
    const createdOwner = await this.prisma.owners.create({ 
      data: {...ownerCreateInput, token_owner: token} 
    });
    return plainToClass(Owner, createdOwner);
  }

  async update(id: string, ownerDTO: OwnerDTO): Promise<Owner> {
    const ownerUpdateInput = this.mapOwnerDTOToCreateInput(ownerDTO);
    const token = await this.JwtService.sign({ sub: id }).toString();
    const updatedOwner = await this.prisma.owners.update({
      where: { id_owner: id },
      data: {...ownerUpdateInput, token_owner: token}
    });
    return plainToClass(Owner, updatedOwner);
  }

  async delete(id: string): Promise<Owner> {
    const deletedOwner = await this.prisma.owners.delete({ where: { id_owner: id } });
    return plainToClass(Owner, deletedOwner);
  }
}