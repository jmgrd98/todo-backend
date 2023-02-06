import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from 'database/PrismaService';

@Module({
  controllers: [TodosController],
  providers: [TodosService, PrismaService]
})
export class TodosModule {}
