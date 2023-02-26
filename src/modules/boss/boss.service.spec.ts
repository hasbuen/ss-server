import { Test, TestingModule } from '@nestjs/testing';
import { BossService } from './boss.service';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
import { Boss } from 'src/@generated/prisma-nestjs-graphql/boss/boss.model';

describe('BossService', () => {
  let service: BossService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [BossService, PrismaService],
    }).compile();

    service = module.get<BossService>(BossService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prismaService.boss.deleteMany({});
  });

  describe('findAll', () => {
    it('should return an array of bosses', async () => {
      const boss1 = await prismaService.boss.create({
        data: {
          username_boss: 'john.doe',
          password_boss: 'password',
          email_boss: 'john.doe@example.com',
        },
      });
      const boss2 = await prismaService.boss.create({
        data: {
          username_boss: 'jane.doe',
          password_boss: 'password',
          email_boss: 'jane.doe@example.com',
        },
      });

      const result = await service.findAll();

      expect(result).toHaveLength(2);
      expect(result[0]).toBeInstanceOf(Boss);
      expect(result[0].id_boss).toBe(boss1.id_boss);
      expect(result[0].username_boss).toBe(boss1.username_boss);
      expect(result[0].email_boss).toBe(boss1.email_boss);
      expect(result[1]).toBeInstanceOf(Boss);
      expect(result[1].id_boss).toBe(boss2.id_boss);
      expect(result[1].username_boss).toBe(boss2.username_boss);
      expect(result[1].email_boss).toBe(boss2.email_boss);
    });
  });
});
