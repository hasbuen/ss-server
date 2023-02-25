// Importa a biblioteca UUID e a nomeia como uuidv4
import { v4 as uuidv4 } from 'uuid';

// Importa o Injectable decorator e o PrismaService e o nomeia respectivamente
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

// Importa o Prisma client, o class-transformer e o OwnerDTO
import { Prisma } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { OwnerDTO } from './owner.dto';

// Importa o Owner model e o módulo crypto do Node.js
import { Owner } from 'src/@generated/prisma-nestjs-graphql/owner/owner.model';
import * as crypto from 'crypto';

// Importa o JwtService do projeto
import { JwtService } from '../jwt/jwt.service';

// Define a classe OwnerService como um Injectable
@Injectable()
export class OwnerService {
  // Define o construtor da classe e injeta o PrismaService e o JwtService
  constructor(private prisma: PrismaService, private JwtService: JwtService) {}

  // Define uma função que mapeia um OwnerDTO para um Prisma.ownersCreateInput
  private mapOwnerDTOToCreateInput(
    ownerDTO: OwnerDTO,
  ): Prisma.ownersCreateInput {
    // Cria um hash MD5 da senha do proprietário a partir do módulo crypto
    const hashedPassword = crypto
      .createHash('md5')
      .update(ownerDTO.password_owner)
      .digest('hex');
    // Gera um novo UUID usando a biblioteca UUID
    const id = uuidv4();

    // Retorna um objeto Prisma.ownersCreateInput com as informações mapeadas do OwnerDTO
    return {
      id_owner: id,
      username_owner: ownerDTO.username_owner,
      password_owner: hashedPassword,
      email_owner: ownerDTO.email_owner,
      boss: { connect: { id_boss: ownerDTO.boss_id } },
    };
  }

  // Define uma função assíncrona para buscar todos os proprietários na base de dados
  async findAll(): Promise<Owner[]> {
    return this.prisma.owners.findMany();
  }

  // Define uma função assíncrona para buscar um proprietário pelo ID na base de dados
  async findById(id: string): Promise<Owner | null> {
    return this.prisma.owners.findUnique({ where: { id_owner: id } });
  }

  // Define uma função assíncrona para criar um novo proprietário na base de dados
  async create(ownerDTO: OwnerDTO): Promise<Owner> {
    // Mapeia o OwnerDTO para um Prisma.ownersCreateInput
    const ownerCreateInput = this.mapOwnerDTOToCreateInput(ownerDTO);

    // Gera um token JWT para o novo proprietário
    const token = (
      await this.JwtService.sign({ sub: ownerCreateInput.id_owner })
    ).toString();

    // Cria o novo proprietário na base de dados com o token gerado
    const createdOwner = await this.prisma.owners.create({
      data: { ...ownerCreateInput, token_owner: token },
    });

    // Retorna o proprietário recém-criado como uma instância da classe Owner
    return plainToClass(Owner, createdOwner);
  }

  // Define uma função assíncrona para atualizar um proprietário na base de dados
  // Esta função assíncrona atualiza um proprietário existente com base no ID e nos dados do proprietárioDTO fornecido
  async update(id: string, ownerDTO: OwnerDTO): Promise<Owner> {
    // Cria uma entrada de proprietário atualizada com base no DTO fornecido
    const ownerUpdateInput = this.mapOwnerDTOToCreateInput(ownerDTO);
    // Gera um novo token JWT com base no ID do proprietário
    const token = await this.JwtService.sign({ sub: id }).toString();
    // Atualiza o proprietário correspondente ao ID fornecido no banco de dados com as novas informações
    const updatedOwner = await this.prisma.owners.update({
      where: { id_owner: id },
      data: { ...ownerUpdateInput, token_owner: token },
    });
    // Converte o objeto atualizado em uma instância da classe proprietário e a retorna
    return plainToClass(Owner, updatedOwner);
  }

  // Esta função assíncrona exclui um proprietário existente com base no ID fornecido
  async delete(id: string): Promise<Owner> {
    // Exclui o proprietário correspondente ao ID fornecido do banco de dados
    const deletedOwner = await this.prisma.owners.delete({
      where: { id_owner: id },
    });
    // Converte o objeto excluído em uma instância da classe proprietário e a retorna
    return plainToClass(Owner, deletedOwner);
  }
}
