import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create(user: CreateUserDto): Promise<User> {
    const role = await this.rolesRepository.findOne({
      where: { name: user.role },
    });
    if (!role) {
      throw new Error('Role not found');
    }
    const newUser = this.usersRepository.create({ ...user, role: role });
    return this.usersRepository.save(newUser);
  }
}
