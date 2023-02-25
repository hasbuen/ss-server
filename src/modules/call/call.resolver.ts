// Importando alguns módulos e classes do NestJS
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';

// Importando classe de argumentos de criação de chamada
import { CreateOnecallArgs } from 'src/@generated/prisma-nestjs-graphql/call/create-onecall.args';

// Importando classe modelo de chamada
import { Call } from 'src/@generated/prisma-nestjs-graphql/call/call.model';

// Importando classe DTO de chamada
import { CallDTO } from './call.dto';

// Importando serviço de chamada
import { CallService } from './call.service';

// Importando decorador UploadedFile e classe de interceptação de arquivos
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

// Importando módulo de sistema de arquivos do Node.js
import * as fs from 'fs';

// Definindo classe Resolver para manipular chamadas
@Resolver()
export class CallResolver {
  // Injetando dependência do serviço de chamada
  constructor(private callService: CallService) {}

  // Definindo consulta para obter todas as chamadas
  @Query(() => [Call])
  async getAllCalles(): Promise<Call[]> {
    return this.callService.findAll();
  }

  // Definindo consulta para obter uma chamada por ID
  @Query(() => Call)
  async getCallById(@Args('id') id: string): Promise<Call> {
    return this.callService.findById(id);
  }

  // Definindo mutação para criar uma nova chamada
  @Mutation(() => Call)
  @UseInterceptors(FileInterceptor('file'))
  async createCall(
    @UploadedFile() file: Express.Multer.File,
    @Args('data') data: CreateOnecallArgs,
  ): Promise<Call> {
    const path_call = 'C:/Backup/' + file.originalname;
    const fileStream = fs.createWriteStream(path_call);
    fileStream.write(file.buffer);
    fileStream.end();
    return this.callService.create({ ...data.data, path_call });
  }

  // Definindo mutação para atualizar uma chamada existente
  @Mutation(() => Call)
  async updateCall(
    @Args('id') id: string,
    @Args('data') data: CallDTO,
  ): Promise<Call> {
    return this.callService.update(id, data);
  }

  // Definindo mutação para deletar uma chamada existente
  @Mutation(() => Call)
  async deleteCall(@Args('id') id: string): Promise<Call> {
    return this.callService.delete(id);
  }
}
