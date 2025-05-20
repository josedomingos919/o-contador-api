import { Module, Global } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporte o serviço para que outros módulos possam usá-lo
})
export class PrismaModule {}
