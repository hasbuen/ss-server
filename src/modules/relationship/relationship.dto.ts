// Importa as dependências do NestJS para lidar com a entrada de dados GraphQL e validação de classe
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

// Define essa classe como um tipo de entrada GraphQL
@InputType()
export class RelationshipDTO {
  // Define o campo "id_relationship" com o tipo String
  @Field(() => String)
  id_relationship: string;

  // Define o campo "ticket_relationship" como um número e aplica validação para garantir que não seja vazio
  @Field(() => Number)
  @IsNotEmpty()
  ticket_relationship: number;

  // Define o campo "contact_relationship" como um string e aplica validação para garantir que não seja vazio
  @Field(() => String)
  @IsNotEmpty()
  contact_relationship: string;

  // Define o campo "createdAt_relationship" como uma data, permitindo valores nulos
  @Field(() => Date, { nullable: true })
  createdAt_relationship: Date;

  // Define o campo "updatedAt_relationship" como uma data, permitindo valores nulos
  @Field(() => Date, { nullable: true })
  updatedAt_relationship: Date;

  // Define o campo "call_id" como um string e aplica validação para garantir que não seja vazio
  @Field(() => String)
  @IsNotEmpty()
  call_id: string;
}
