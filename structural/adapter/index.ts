/*
  Visão geral do Adapter

  - Converter a interface de uma classe em outra interface esperada pelos clientes.
    O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria
    impossível por causa de suas interfaces incompatíveis.
  - Também pode ser usado para adaptar interfaces de código legado para um novo código.
*/

import { EmailValidatorAdapter } from "./email-validator-adapter";
import { EmailValidatorProtocol } from "./email-validator-protocols";

const email = "lucioflavio.cmatias@hotmail.com";

function validateEmail(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  emailValidator.isEmail(email)
    ? console.log("Email Válido")
    : console.log("Email Inválido");
}

validateEmail(new EmailValidatorAdapter(), email);
