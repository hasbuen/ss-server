import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

@InputType()
export class OwnerDTO {

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  username_owner: string;

  @Field(() => String)

  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password too weak',
  })
  @IsNotEmpty()
  password_owner: string;

  @IsEmail()
  @IsNotEmpty()
  @Field(() => String)
  email_owner: string;

  @IsNotEmpty()
  @Field(() => String)
  boss_id: string;
}