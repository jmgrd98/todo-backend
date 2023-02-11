import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'database/PrismaService';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const userExists = await this.prisma.user.findFirst({
        where: {
          name: createUserDto.name,
        },
      });

      if (userExists) {
        return throwError(
          () =>
            new HttpException('User already exists!', HttpStatus.BAD_REQUEST),
        );
      }

      return this.prisma.user.create({
        data: createUserDto,
      });
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error('User already exists!');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new Error('Todo does not exists!');
    }

    return await this.prisma.user.update({
      data: updateUserDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new Error('User does not exists!');
    }

    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
