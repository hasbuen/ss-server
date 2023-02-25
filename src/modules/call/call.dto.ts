// Esta linha importa dois objetos: "Field" e "InputType" do módulo "@nestjs/graphql".
import { Field, InputType } from '@nestjs/graphql';

// Esta linha importa três objetos: "IsNotEmpty", "IsNumber" e "IsString" do módulo "class-validator".
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// Esta linha declara um novo tipo de objeto de entrada com o decorador "@InputType".
@InputType()

// Esta linha define uma nova classe "CallDTO".
export class CallDTO {
  // Esta linha aplica dois validadores ao campo "ticket_call": "@IsNumber()" e "@IsNotEmpty({ message: 'Por favor, informar dados para este campo!' })".
  @IsNumber()
  @IsNotEmpty({ message: 'Por favor, informar dados para este campo!' })
  @Field(() => Number)
  ticket_call: number;

  // Esta linha aplica dois validadores ao campo "contact_call": "@IsString({ message: 'Este cmapo não aceita números ou caracteres especiais!' })" e "@IsNotEmpty({ message: 'Por favor, informar dados para este campo!' })".
  @IsString({
    message: 'Este cmapo não aceita números ou caracteres especiais!',
  })
  @IsNotEmpty({ message: 'Por favor, informar dados para este campo!' })
  @Field(() => String)
  contact_call: string;

  // Esta linha aplica um validador ao campo "level_call": "@IsNumber()".
  @IsNumber()
  @Field(() => Number, { nullable: true })
  level_call: number;

  // Esta linha aplica um validador ao campo "path_call": "@IsNotEmpty({ message: 'Por favor, informe o destino!' })".
  @IsNotEmpty({ message: 'Por favor, informe o destino!' })
  @Field(() => String)
  path_call: string;

  // Esta linha aplica um validador ao campo "owner_id": "@IsNotEmpty()".
  @IsNotEmpty()
  @Field(() => String)
  owner_id: string;
}
