import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { AddUserDto } from "./dto/AddUserDto";

@Controller("users")
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAll() {
    return this.userService.getAllUsers();
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async addUser(@Body() dto: AddUserDto) {
    return this.userService.addUser(dto);
  }
}
