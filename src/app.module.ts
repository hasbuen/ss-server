// Importa a classe Module do pacote @nestjs/common
import { Module } from '@nestjs/common';

// Importa a classe GraphQLModule do pacote @nestjs/graphql
import { GraphQLModule } from '@nestjs/graphql';

// Importa as classes ApolloDriver e ApolloDriverConfig do pacote @nestjs/apollo
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// Importa a classe BossModule do arquivo ./modules/boss/boss.module
import { BossModule } from './modules/boss/boss.module';

// Importa a classe OwnerModule do arquivo ./modules/owner/owner.module
import { OwnerModule } from './modules/owner/owner.module';

// Importa a classe PermissionModule do arquivo ./modules/permission/permission.module
import { PermissionModule } from './modules/permission/permission.module';

// Importa a classe CallModule do arquivo ./modules/call/call.module
import { CallModule } from './modules/call/call.module';

// Importa a classe RelationshipModule do arquivo ./modules/relationship/relationship.module
import { RelationshipModule } from './modules/relationship/relationship.module';
import { JwtModule } from '@nestjs/jwt';

// Define a classe AppModule com a anotação @Module
@Module({
  // Define os módulos importados pela aplicação
  imports: [
    // Define o módulo GraphQL com a configuração do driver ApolloDriver e autoSchemaFile como true
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),

    // Define os módulos de Boss, Owner, Permission, Call e Relationship
    BossModule,
    OwnerModule,
    PermissionModule,
    CallModule,
    RelationshipModule,
    JwtModule,
  ],

  // Define os controladores usados na aplicação
  controllers: [],

  // Define os provedores usados na aplicação
  providers: [],
})

// Exporta a classe AppModule
export class AppModule {}