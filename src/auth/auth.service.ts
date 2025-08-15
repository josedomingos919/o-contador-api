import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { UsersService } from "../users/users.service";
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    if (!username || !password) {
      throw new ForbiddenException("Dados incorrectos...");
    }

    const user = await this.usersService.findByUsername(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(
      loginDto?.username,
      loginDto?.password
    );

    if (!user) {
      throw new UnauthorizedException("Credenciais inválidas");
    }

    const payload = { username: user.username, sub: user.id, type: user.type };

    return {
      access_token: this.jwtService.sign(payload, { expiresIn: "1d" }),
    };
  }
}
