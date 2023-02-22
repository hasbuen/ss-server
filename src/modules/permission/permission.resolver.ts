import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateOnepermissionArgs } from 'src/@generated/prisma-nestjs-graphql/Permission/create-onepermission.args';
import { Permission } from 'src/@generated/prisma-nestjs-graphql/Permission/permission.model';
import { PermissionDTO } from './permission.dto';
import { PermissionService } from './permission.service';


@Resolver()
export class PermissionResolver {
  constructor(private permissionService: PermissionService) {}

  @Query(() => [Permission])
  async getAllPermissiones(): Promise<Permission[]> {
    return this.permissionService.findAll();
  }

  @Query(() => Permission)
  async getPermissionById(@Args('id') id: string): Promise<Permission> {
    return this.permissionService.findById(id);
  }

  @Mutation(() => Permission)
  async createPermission(
    @Args('data') data: CreateOnepermissionArgs,
  ): Promise<Permission> {
    return this.permissionService.create(data.data);
  }

  @Mutation(() => Permission)
  async updatePermission(
    @Args('id') id: string,
    @Args('data') data: PermissionDTO,
  ): Promise<Permission> {
    return this.permissionService.update(id, data);
  }

  @Mutation(() => Permission)
  async deletePermission(@Args('id') id: string): Promise<Permission> {
    return this.permissionService.delete(id);
  }
}