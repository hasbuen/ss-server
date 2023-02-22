// O código importa a biblioteca 'uuid', que é utilizada para gerar UUIDs, e importa a biblioteca 'crypto', que é utilizada para gerar hashes de senhas. Também importa algumas classes do NestJS e de outros módulos do projeto.
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Boss } from 'src/@generated/prisma-nestjs-graphql/boss/boss.model';
import { BossDTO } from './boss.dto';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class BossService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  // Método utilizado para criar um novo chefe.
  async create(data: BossDTO): Promise<Boss> {
    // Hash da senha utilizando o algoritmo md5.
    const hashedPassword = crypto
      .createHash('md5')
      .update(data.password_boss)
      .digest('hex');
    // Gera um UUID para o chefe.
    const id = uuidv4();
    // Gera um token JWT e armazena no banco de dados.
    const token = (await this.jwtService.sign({ sub: id })).toString();
    // Cria o chefe no banco de dados com os dados informados.
    const boss = await this.prisma.boss.create({
      data: {
        id_boss: id,
        username_boss: data.username_boss,
        password_boss: hashedPassword,
        token_boss: token,
        email_boss: data.email_boss,
      },
    });
    return boss;
  }

  // Método utilizado para retornar todos os chefes cadastrados.
  async findAll(): Promise<Boss[]> {
    return this.prisma.boss.findMany();
  }

  // Método utilizado para retornar um chefe específico com base em seu ID.
  async findById(id: string): Promise<Boss> {
    return this.prisma.boss.findUnique({ where: { id_boss: id } });
  }

  // Método utilizado para atualizar um chefe existente.
  async update(id: string, data: BossDTO): Promise<Boss> {
    // Hash da senha utilizando o algoritmo md5.
    const hashedPassword = crypto
      .createHash('md5')
      .update(data.password_boss)
      .digest('hex');
    // Gera um novo token JWT e armazena no banco de dados.
    const token = (await this.jwtService.sign({ sub: id })).toString();
    // Atualiza os dados do chefe no banco de dados.
    return this.prisma.boss.update({
      where: { id_boss: id },
      data: {
        username_boss: data.username_boss,
        password_boss: hashedPassword,
        token_boss: token,
        email_boss: data.email_boss,
      },
    });
  }

  // Método utilizado para excluir um chefe existente.
  async delete(id: string): Promise<Boss> {
    return this.prisma.boss.delete({ where: { id_boss: id } });
  }
}
