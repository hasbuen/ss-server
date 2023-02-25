// Importa os decoradores "Resolver", "Args", "Mutation" e "Query" do pacote "@nestjs/graphql"
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';

// Importa a interface "CreateOnepermissionArgs" do arquivo "create-onepermission.args"
// que se encontra no diretório "@generated/prisma-nestjs-graphql/Permission"
import { CreateOnepermissionArgs } from 'src/@generated/prisma-nestjs-graphql/Permission/create-onepermission.args';

// Importa o modelo "Permission" do arquivo "permission.model"
// que se encontra no diretório "@generated/prisma-nestjs-graphql/Permission"
import { Permission } from 'src/@generated/prisma-nestjs-graphql/Permission/permission.model';

// Importa a classe "PermissionDTO" do arquivo "permission.dto"
import { PermissionDTO } from './permission.dto';

// Importa o serviço "PermissionService" do arquivo "permission.service"
import { PermissionService } from './permission.service';

// Define um resolver para a entidade "Permission"
@Resolver()

// Define a classe "PermissionResolver"
export class PermissionResolver {
  // Injeta uma instância do serviço "PermissionService" no construtor da classe
  constructor(private permissionService: PermissionService) {}

  // Define um resolver para a consulta de todas as permissões
  @Query(() => [Permission])
  async getAllPermissiones(): Promise<Permission[]> {
    return this.permissionService.findAll();
  }

  // Define um resolver para a consulta de uma permissão por ID
  @Query(() => Permission)
  async getPermissionById(@Args('id') id: string): Promise<Permission> {
    return this.permissionService.findById(id);
  }

  // Define um resolver para a criação de uma permissão
  @Mutation(() => Permission)
  async createPermission(
    @Args('data') data: CreateOnepermissionArgs,
  ): Promise<Permission> {
    return this.permissionService.create(data.data);
  }

  // Define um resolver para a atualização de uma permissão por ID
  @Mutation(() => Permission)
  async updatePermission(
    @Args('id') id: string,
    @Args('data') data: PermissionDTO,
  ): Promise<Permission> {
    return this.permissionService.update(id, data);
  }

  // Define um resolver para a exclusão de uma permissão por ID
  @Mutation(() => Permission)
  async deletePermission(@Args('id') id: string): Promise<Permission> {
    return this.permissionService.delete(id);
  }
}
