import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);

    console.log('====================================');
    console.log(
      CreateUserDto,
      this.users
    );
    console.log('====================================');
    
    return 'This action adds a new user';
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.username == id );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
