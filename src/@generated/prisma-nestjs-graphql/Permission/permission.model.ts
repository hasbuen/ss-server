import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Permission {

    @Field(() => String, { nullable: false })
    id_permission: string;

    @Field(() => Boolean, { nullable: true })
    insert_permission: boolean;

    @Field(() => Boolean, { nullable: true })
    edit_permission: boolean;

    @Field(() => Boolean, { nullable: true })
    update_permission: boolean;
    
    @Field(() => Boolean, { nullable: true })
    remove_permission: boolean;

    @Field(() => String, { nullable: false })
    boss_id: string;

    @Field(() => String, { nullable: false })
    owner_id: string;
}