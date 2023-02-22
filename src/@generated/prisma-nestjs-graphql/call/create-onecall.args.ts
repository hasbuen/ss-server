import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { CallDTO } from "src/modules/call/call.dto";

@InputType() 
@ArgsType()
export class CreateOnecallArgs {
  @Field(() => CallDTO)
  data: CallDTO;
}
