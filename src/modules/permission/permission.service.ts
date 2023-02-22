import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from 'prisma/prisma.service';
import { Permission } from 'src/@generated/prisma-nestjs-graphql/Permission/permission.model';
import { PermissionDTO } from './permission.dto';

@Injectable()
export class PermissionService {
    
  constructor(private prisma: PrismaService) {}

  private mapPermissionDTOToCreateInput(permissionDTO: PermissionDTO): Prisma.permissionsCreateInput {
    return {
    id_permission: uuidv4(),
    insert_permission: permissionDTO.insert_permission,
    edit_permission: permissionDTO.edit_permission,
    update_permission: permissionDTO.update_permission,
    remove_permission: permissionDTO.remove_permission,
    boss: { 
        connect: { 
            id_boss: permissionDTO.boss_id 
        } 
    },
      owners: { 
        connect: { 
            id_owner: permissionDTO.owner_id 
        } 
    },
    };
  }
  
  async findAll(): Promise<Permission[]> {
    return this.prisma.permissions.findMany();
  }

  async findById(id: string): Promise<Permission | null> {
    return this.prisma.permissions.findUnique({ where: { id_permission: id } });
  }

  async create
(permissionDTO: PermissionDTO): Promise<Permission> {
    const permissionCreateInput = this.mapPermissionDTOToCreateInput(permissionDTO);
    const createdPermission = await this.prisma.permissions.create({ 
        data: permissionCreateInput 
    });
    return plainToClass(Permission, createdPermission);
  }

  async update(id: string, permissionDTO: PermissionDTO): Promise<Permission> {
    const permissionUpdateInput = this.mapPermissionDTOToCreateInput(permissionDTO);
    const updatedPermission = await this.prisma.permissions.update({
      where: { id_permission: id },
      data: permissionUpdateInput
    });
    return plainToClass(Permission, updatedPermission);
  }

  async delete(id: string): Promise<Permission> {
    const deletedPermission = await this.prisma.permissions.delete({ 
        where: { id_permission: id } 
    });
    return plainToClass(Permission, deletedPermission);
  }
}