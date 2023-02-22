import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty } from "class-validator";

@InputType()
export class PermissionDTO {

    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    insert_permission: boolean;

    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    edit_permission: boolean;

    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    update_permission: boolean;
    
    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    remove_permission: boolean;

    @IsNotEmpty()
    @Field(() => String)
    boss_id: string;

    @IsNotEmpty()
    @Field(() => String)
    owner_id: string;
}