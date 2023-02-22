import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Relationship {
    @Field(() => String, { nullable: true })
    id_relationship: string;

    @Field(() => Number, { nullable: true })
    ticket_relationship: number;

    @Field(() => String, { nullable: true })
    contact_relationship: string;

    @Field(() => Date, { nullable: false })
    createdAt_relationship: Date;

    @Field(() => Date, { nullable: false })
    updatedAt_relationship: Date;

    @Field(() => String, { nullable: true })
    call_id: string;
}