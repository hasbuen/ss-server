import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateOnecallArgs } from 'src/@generated/prisma-nestjs-graphql/call/create-onecall.args';
import { Call } from 'src/@generated/prisma-nestjs-graphql/call/call.model';
import { CallDTO } from './call.dto';
import { CallService } from './call.service';
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';


@Resolver()
export class CallResolver {
  constructor(private callService: CallService) {}

  @Query(() => [Call])
  async getAllCalles(): Promise<Call[]> {
    return this.callService.findAll();
  }

  @Query(() => Call)
  async getCallById(@Args('id') id: string): Promise<Call> {
    return this.callService.findById(id);
  }

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

  @Mutation(() => Call)
  async updateCall(
    @Args('id') id: string,
    @Args('data') data: CallDTO,
  ): Promise<Call> {
    return this.callService.update(id, data);
  }

  @Mutation(() => Call)
  async deleteCall(@Args('id') id: string): Promise<Call> {
    return this.callService.delete(id);
  }
}