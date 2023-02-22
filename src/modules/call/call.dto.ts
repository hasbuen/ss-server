import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


@InputType()
export class CallDTO {

    @IsNumber()
    @IsNotEmpty({ message: 'Por favor, informar dados para este campo!' })
    @Field(() => Number)
    ticket_call: number;

    @IsString({ message: 'Este cmapo não aceita números ou caracteres especiais!' })
    @IsNotEmpty({ message: 'Por favor, informar dados para este campo!' })
    @Field(() => String)
    contact_call: string;

    @IsNumber()
    @Field(() => Number, { nullable: true })
    level_call: number;

    @IsNotEmpty({ message: 'Por favor, informe o destino!' })
    @Field(() => String)
    path_call: string;

    @IsNotEmpty()
    @Field(() => String)
    owner_id: string;
}