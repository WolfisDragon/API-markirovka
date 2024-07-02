import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findOne(login);
    const pass = await argon2.verify(user.password, password);
    if (user && pass) {
      return user;
    }
    throw new UnauthorizedException('Неправильный логин или пароль.');
  }

  async login(user: IUser) {
    const { id, login } = user;
    return {
      id,
      login,
      token: this.jwtService.sign({ id: user.id, login: user.login }),
    };
  }
}
