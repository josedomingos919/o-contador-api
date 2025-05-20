import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service"; // cria esse se ainda não tiver

// import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async getAllUsers() {
    const response = await this.prisma.user.findMany();

    return response;
  }
}
