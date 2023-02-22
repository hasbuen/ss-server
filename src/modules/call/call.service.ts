import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { PrismaService } from 'prisma/prisma.service';
import { Call } from 'src/@generated/prisma-nestjs-graphql/call/call.model';
import { CallDTO } from './call.dto';

@Injectable()
export class CallService {
    
  constructor(private prisma: PrismaService) {}

  private mapCallDTOToCreateInput(callDTO: CallDTO): Prisma.callsCreateInput {
    return {
      id_call: uuidv4(),
      ticket_call: callDTO.ticket_call,
      contact_call: callDTO.contact_call,
      level_call: callDTO.level_call,
      path_call: callDTO.path_call,
      owners: { 
        connect: { 
          id_owner: callDTO.owner_id 
        } 
      }
    };
  }
  
  async findAll(): Promise<Call[]> {
    return this.prisma.calls.findMany();
  }

  async findById(id: string): Promise<Call | null> {
    return this.prisma.calls.findUnique({ where: { id_call: id } });
  }

  async create
(callDTO: CallDTO): Promise<Call> {
    const callCreateInput = this.mapCallDTOToCreateInput(callDTO);
    const createdCall = await this.prisma.calls.create({ data: callCreateInput });
    return plainToClass(Call, createdCall);
  }

  async update(id: string, callDTO: CallDTO): Promise<Call> {
    const callUpdateInput = this.mapCallDTOToCreateInput(callDTO);
    const updatedCall = await this.prisma.calls.update({
      where: { id_call: id },
      data: callUpdateInput
    });
    return plainToClass(Call, updatedCall);
  }

  async delete(id: string): Promise<Call> {
    const deletedCall = await this.prisma.calls.delete({ where: { id_call: id } });
    return plainToClass(Call, deletedCall);
  }
}