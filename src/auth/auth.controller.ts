import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./auth.service";
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard)
  @Post("profile")
  async profile() {
    return ["rest", "hello"];
  }
}
