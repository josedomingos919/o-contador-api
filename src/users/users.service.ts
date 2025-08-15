import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service"; // cria esse se ainda não tiver
import { ActiveType, AddUserDto } from "./dto/AddUserDto";

import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username, active: ActiveType.ACTIVE },
    });
  }

  async getAllUsers() {
    const response = await this.prisma.user.findMany();

    return response;
  }

  async addUser(dto: AddUserDto) {
    dto.active = ActiveType.INACTIVE;
    dto.password = bcrypt.hashSync(dto.password, 10);

    const response = await this.prisma.user.create({ data: dto });

    return response;
  }
}
