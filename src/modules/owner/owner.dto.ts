// Importa os decorators Field e InputType do NestJS GraphQL
import { Field, InputType } from '@nestjs/graphql';

// Importa os validadores de classes do class-validator
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

// Define a classe OwnerDTO como um tipo de entrada do GraphQL
@InputType()

// Exporta a classe OwnerDTO
export class OwnerDTO {
  // Define o campo 'username_owner' como um campo de string não vazio e obrigatório
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  username_owner: string;

  // Define o campo 'password_owner' como um campo de string obrigatório que deve ter entre 4 e 20 caracteres
  @Field(() => String)
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty()
  password_owner: string;

  // Define o campo 'email_owner' como um campo de string não vazio e obrigatório que deve ser um e-mail válido
  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email_owner: string;

  // Define o campo 'boss_id' como um campo de string não vazio e obrigatório
  @IsNotEmpty()
  @Field(() => String)
  boss_id: string;
}
