import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [AuthModule, PrismaModule, UsersModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
