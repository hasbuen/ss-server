// Importa as classes Field e InputType do pacote @nestjs/graphql
import { Field, InputType } from '@nestjs/graphql';

// Importa as classes IsBoolean e IsNotEmpty do pacote class-validator
import { IsBoolean, IsNotEmpty } from 'class-validator';

// Define um InputType com o nome PermissionDTO
@InputType()
export class PermissionDTO {
  // Aplica a validação IsBoolean ao campo insert_permission e define que é opcional (nullable: true)
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  insert_permission: boolean;

  // Aplica a validação IsBoolean ao campo edit_permission e define que é opcional (nullable: true)
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  edit_permission: boolean;

  // Aplica a validação IsBoolean ao campo update_permission e define que é opcional (nullable: true)
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  update_permission: boolean;

  // Aplica a validação IsBoolean ao campo remove_permission e define que é opcional (nullable: true)
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  remove_permission: boolean;

  // Aplica a validação IsNotEmpty ao campo boss_id e define que é obrigatório
  @IsNotEmpty()
  @Field(() => String)
  boss_id: string;

  // Aplica a validação IsNotEmpty ao campo owner_id e define que é obrigatório
  @IsNotEmpty()
  @Field(() => String)
  owner_id: string;
}
