// Importa o decorator Module do NestJS
import { Module } from '@nestjs/common';

// Importa o serviço JwtService
import { JwtService } from './jwt.service';

// Define a classe JwtModule como um módulo do NestJS
@Module({

  // Define os provedores de serviços para o módulo, nesse caso apenas o JwtService
  providers: [JwtService],

  // Define os serviços que devem ser exportados pelo módulo, nesse caso apenas o JwtService
  exports: [JwtService],
})

// Exporta a classe JwtModule
export class JwtModule {}