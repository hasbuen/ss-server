// Importa a classe ValidationPipe do pacote @nestjs/common
import { ValidationPipe } from '@nestjs/common';
// Importa a classe NestFactory do pacote @nestjs/core
import { NestFactory } from '@nestjs/core';
// Importa a classe AppModule do arquivo app.module.ts
import { AppModule } from './app.module';

// Declara uma função assíncrona chamada bootstrap
async function bootstrap() {
  // Cria uma instância do aplicativo usando o módulo AppModule
  const app = await NestFactory.create(AppModule);
  // Habilita o CORS no aplicativo
  app.enableCors();
  // Usa o ValidationPipe para validar todas as entradas do corpo, parâmetros de consulta, cabeçalhos e parâmetros de rota que são manipulados pelo aplicativo.
  app.useGlobalPipes(new ValidationPipe());
  // Inicia o servidor e escuta na porta 3000
  await app.listen(3000);
}

// Chama a função bootstrap
bootstrap();
