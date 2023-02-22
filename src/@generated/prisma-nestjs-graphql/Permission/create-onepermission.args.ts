import { InputType, ArgsType, Field } from '@nestjs/graphql';
import { PermissionDTO } from 'src/modules/permission/permission.dto';


@InputType()
@ArgsType()
export class CreateOnepermissionArgs {
  @Field(type => PermissionDTO)
  data: PermissionDTO;
}