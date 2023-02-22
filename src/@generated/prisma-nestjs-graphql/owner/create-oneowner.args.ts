import { InputType, ArgsType, Field } from '@nestjs/graphql';
import { OwnerDTO } from 'src/modules/owner/owner.dto';


@InputType()
@ArgsType()
export class CreateOneownerArgs {
  @Field(type => OwnerDTO)
  data: OwnerDTO;
}