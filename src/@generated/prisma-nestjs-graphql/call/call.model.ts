import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Call {
    @Field(() => String, { nullable: false })
    id_call: string;

    @Field(() => Number, { nullable: false })
    ticket_call: number;

    @Field(() => String, { nullable: false })
    contact_call: string;

    @Field(() => Number, { nullable: true })
    level_call: number;

    @Field(() => String, { nullable: false })
    path_call: string;

    @Field(() => Date, { nullable: true })
    createdAt_call: Date;

    @Field(() => Date, { nullable: true })
    updatedAt_call: Date;

    @Field(() => String, { nullable: false })
    owner_id: string;
}