// Importa a função 'v4' do pacote 'uuid' e a renomeia para 'uuidv4'
import { v4 as uuidv4 } from 'uuid';

// Importa o decorator 'Injectable' do módulo '@nestjs/common'
import { Injectable } from '@nestjs/common';

// Importa o objeto 'Prisma' do cliente Prisma e a função 'plainToClass' do pacote 'class-transformer'
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';

// Importa a classe 'PrismaService' do arquivo 'prisma.service.ts' e a classe 'Permission' do arquivo 'permission.model.ts'
import { PrismaService } from 'prisma/prisma.service';
import { Permission } from 'src/@generated/prisma-nestjs-graphql/Permission/permission.model';

// Importa a classe 'PermissionDTO' do arquivo 'permission.dto.ts'
import { PermissionDTO } from './permission.dto';

// Define a classe 'PermissionService' como injetável
@Injectable()
export class PermissionService {
  // Injeta a classe 'PrismaService' no construtor
  constructor(private prisma: PrismaService) {}

  // Mapeia um objeto 'PermissionDTO' para o tipo 'Prisma.permissionsCreateInput'
  private mapPermissionDTOToCreateInput(
    permissionDTO: PermissionDTO,
  ): Prisma.permissionsCreateInput {
    return {
      id_permission: uuidv4(), // Gera um UUID para o ID da permissão
      insert_permission: permissionDTO.insert_permission,
      edit_permission: permissionDTO.edit_permission,
      update_permission: permissionDTO.update_permission,
      remove_permission: permissionDTO.remove_permission,
      boss: {
        connect: {
          id_boss: permissionDTO.boss_id, // Conecta a permissão ao ID do chefe
        },
      },
      owners: {
        connect: {
          id_owner: permissionDTO.owner_id, // Conecta a permissão ao ID do proprietário
        },
      },
    };
  }

  // Retorna todas as permissões
  async findAll(): Promise<Permission[]> {
    return this.prisma.permissions.findMany();
  }

  // Retorna a permissão com o ID fornecido
  async findById(id: string): Promise<Permission | null> {
    return this.prisma.permissions.findUnique({ where: { id_permission: id } });
  }

  // Cria uma nova permissão com os dados fornecidos
  async create(permissionDTO: PermissionDTO): Promise<Permission> {
    const permissionCreateInput =
      this.mapPermissionDTOToCreateInput(permissionDTO); // Mapeia o DTO para o tipo 'Prisma.permissionsCreateInput'
    const createdPermission = await this.prisma.permissions.create({
      data: permissionCreateInput,
    }); // Cria a permissão no banco de dados
    return plainToClass(Permission, createdPermission); // Retorna a permissão criada como objeto da classe 'Permission'
  }

  // Atualiza a permissão com o ID fornecido com os dados fornecidos
  async update(id: string, permissionDTO: PermissionDTO): Promise<Permission> {
    const permissionUpdateInput =
      this.mapPermissionDTOToCreateInput(permissionDTO); // Mapeia o DTO para o tipo 'Prisma.permissionsCreateInput'
    const updatedPermission = await this.prisma.permissions.update({
      where: { id_permission: id }, // Define a permissão a ser atualizada pelo ID fornecido
      data: permissionUpdateInput, // Define os novos dados da permissão
    });
    return plainToClass(Permission, updatedPermission);
  }

  async delete(id: string): Promise<Permission> {
    const deletedPermission = await this.prisma.permissions.delete({
      where: { id_permission: id },
    });
    return plainToClass(Permission, deletedPermission);
  }
}
