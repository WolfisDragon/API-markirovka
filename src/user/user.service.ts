import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        login: createUserDto.login,
      },
    });
    if (existUser)
      throw new UnauthorizedException('Пользователь с таким логином есть');

    const user = await this.userRepository.save({
      login: createUserDto.login,
      password: await argon2.hash(createUserDto.password),
    });

    return { user };
  }

  async findOne(login: string) {
    return this.userRepository.findOne({ where: { login } });
  }
}
