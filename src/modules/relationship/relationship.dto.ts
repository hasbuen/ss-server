import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class RelationshipDTO {

    @Field(() => String)
    id_relationship: string;

    @Field(() => Number)
    @IsNotEmpty()
    ticket_relationship: number;

    @Field(() => String)
    @IsNotEmpty()
    contact_relationship: string;

    @Field(() => Date, { nullable: true })
    createdAt_relationship: Date;
    
    @Field(() => Date, { nullable: true })
    updatedAt_relationship: Date;
    
    @Field(() => String)
    @IsNotEmpty()
    call_id: string;
}