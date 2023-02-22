import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { RelationshipDTO } from "src/modules/relationship/relationship.dto";

@InputType() 
@ArgsType()
export class CreateOnerelationshipArgs {
  @Field(() => RelationshipDTO)
  data: RelationshipDTO;
}