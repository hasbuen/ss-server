import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field(() => String, { nullable: true })
  id_owner: string;

  @Field(() => String, { nullable: false })
  username_owner: string;

  @Field(() => String, { nullable: false })
  password_owner: string;

  @Field(() => String, { nullable: true })
  token_owner: string;

  @Field(() => String, { nullable: false })
  email_owner: string;

  @Field(() => Date, { nullable: true })
  createdAt_owner: Date;

  @Field(() => Date, { nullable: true })
  updatedAt_owner: Date;

  @Field(() => String, { nullable: true })
  boss_id?: string;
}