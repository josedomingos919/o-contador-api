import { IsString, IsNotEmpty, IsInt, IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export enum ActiveType {
  ACTIVE = 1,
  INACTIVE = 0,
}

export class AddUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsOptional()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  @IsInt()
  active: number;
}
