import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  login: string;

  @MinLength(6)
  password: string;
}
