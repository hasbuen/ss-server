// Importa as classes Field e InputType do pacote @nestjs/graphql
import { Field, InputType } from "@nestjs/graphql";
// Importa as classes IsEmail, IsEmpty, IsNotEmpty, IsString, Matches, MaxLength e MinLength do pacote class-validator
import { IsEmail, IsEmpty, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

// Define um InputType com nome BossDTO
@InputType()
export class BossDTO {

    // Define um campo de senha com validação de comprimento mínimo e máximo e expressão regular para garantir que a senha contenha pelo menos uma letra maiúscula, uma letra minúscula, um número ou caractere especial.
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Senha muito fraca!',
    })
    @Field(() => String, { nullable: true })
    @IsNotEmpty({message: 'Senha não informada!'})
    password_boss: string;

    // Define um campo de nome de usuário com validação de string para garantir que ele não contenha números ou caracteres especiais
    @IsString({ message: 'Este campo não  aceita números ou caracteres especiais!' })
    @Field(() => String, { nullable: true })
    username_boss: string;

    // Define um campo de e-mail com validação de formato de e-mail
    @IsEmail()
    @Field(() => String, { nullable: true })
    email_boss: string;
}