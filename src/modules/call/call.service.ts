// Importa a função v4 da biblioteca UUID e a renomeia como uuidv4
import { v4 as uuidv4 } from 'uuid';

// Importa o decorator Injectable do NestJS
import { Injectable } from '@nestjs/common';

// Importa o namespace Prisma do cliente Prisma
import { Prisma } from '@prisma/client';

// Importa a função plainToClass da biblioteca class-transformer
import { plainToClass } from 'class-transformer';

// Importa o serviço PrismaService da aplicação
import { PrismaService } from 'prisma/prisma.service';

// Importa o modelo Call gerado pelo GraphQL
import { Call } from 'src/@generated/prisma-nestjs-graphql/call/call.model';

// Importa o DTO CallDTO
import { CallDTO } from './call.dto';

// Define a classe CallService como injetável
@Injectable()

// Define a classe CallService
export class CallService {
  
  // Define o construtor da classe com o serviço PrismaService injetado
  constructor(private prisma: PrismaService) {}

  // Função que mapeia o DTO CallDTO para o tipo Prisma.callsCreateInput
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
  
  // Função assíncrona que busca todos os Calls
  async findAll(): Promise<Call[]> {
    return this.prisma.calls.findMany();
  }

  // Função assíncrona que busca um Call pelo ID
  async findById(id: string): Promise<Call | null> {
    return this.prisma.calls.findUnique({ where: { id_call: id } });
  }

  // Função assíncrona que cria um Call
  async create(callDTO: CallDTO): Promise<Call> {
    const callCreateInput = this.mapCallDTOToCreateInput(callDTO);
    const createdCall = await this.prisma.calls.create({ data: callCreateInput });
    return plainToClass(Call, createdCall);
  }

  // Função assíncrona que atualiza um Call pelo ID
  async update(id: string, callDTO: CallDTO): Promise<Call> {
    const callUpdateInput = this.mapCallDTOToCreateInput(callDTO);
    const updatedCall = await this.prisma.calls.update({
      where: { id_call: id },
      data: callUpdateInput
    });
    return plainToClass(Call, updatedCall);
  }

  // Função assíncrona que deleta um Call pelo ID
  async delete(id: string): Promise<Call> {
    const deletedCall = await this.prisma.calls.delete({ where: { id_call: id } });
    return plainToClass(Call, deletedCall);
  }
}
