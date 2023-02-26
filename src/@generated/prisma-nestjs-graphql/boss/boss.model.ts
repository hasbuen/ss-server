import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Boss {
  @Field(() => String, { nullable: true })
  id_boss?: string;

  @Field(() => String, { nullable: false })
  username_boss: string;

  @Field(() => String, { nullable: false })
  password_boss: string;

  @Field(() => String, { nullable: true })
  token_boss: string;

  @Field(() => String, { nullable: false })
  email_boss: string;

  @Field(() => Date, { nullable: true })
  createdAt_boss?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt_boss?: Date;
}