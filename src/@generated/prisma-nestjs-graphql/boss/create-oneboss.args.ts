import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { BossDTO } from 'src/modules/boss/boss.dto';

@InputType() 
@ArgsType()
export class CreateOnebossArgs {
  @Field(() => BossDTO)
  data: BossDTO;
}
