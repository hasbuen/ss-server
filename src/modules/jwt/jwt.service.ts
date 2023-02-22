import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  // Chave secreta para assinar os tokens
  private readonly secret = process.env.JWT_SECRET; 

  
  async sign(payload: any): Promise<string> {
    // Gera um token JWT assinado com a chave secreta
    
    return jwt.sign(payload, this.secret,  { expiresIn: '8h' });
  }

  async verify(token: string): Promise<any> {
    try {
      // Verifica se o token é válido e retorna o payload decodificado
      return jwt.verify(token, this.secret);
    } catch (err) {
      // Se houver algum erro na verificação, lança uma exceção com a mensagem de erro
      throw new Error(`Invalid token: ${err.message}`);
    }
  }
}
