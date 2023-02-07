import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from './../../database/PrismaService';

@Injectable()
export class TodosService {

  constructor(
    private prisma: PrismaService
  ) {}

  async create(createTodoDto: CreateTodoDto) {
   
    const todoExists = await this.prisma.todo.findFirst({
      where: {
        description: createTodoDto.description,
      },
    });

    if(todoExists){
      throw new Error('Todo already exists!');
    }

    const todo = await this.prisma.todo.create({
      data: createTodoDto,
    });

    return todo;
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {

    const todo = await this.prisma.todo.findUnique({
      where: {
        id: id,
      }
    })

    if(!todo) {
      throw new Error('Todo already exists!');
    }

    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {

    const todoExists = await this.prisma.todo.findUnique({
      where: {
        id: id,
      }
    });

    if(!todoExists) {
      throw new Error('Todo does not exists!');
    }

    return await this.prisma.todo.update({
      data: updateTodoDto,
      where: {
        id: id,
      }
    })

  }

  async remove(id: number) {
    
    const todoExists = await this.prisma.todo.findUnique({
      where: {
        id: id,
      },
    });

    if(!todoExists) {
      throw new Error('Todo does not exists!');
    }

    return await this.prisma.todo.delete({
      where: {
        id: id,
      }
    });
  }
}
