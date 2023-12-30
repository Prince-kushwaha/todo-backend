import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TodoService {
  constructor(private databaseService: DatabaseService) {}

  async create(createTodoDto: CreateTodoDto) {
    const result = await this.databaseService.todo.create({
      data: createTodoDto,
    });

    return result;
  }

  async findAll() {
    return await this.databaseService.todo.findMany();
  }

  async search(qstr: string) {
    const todos = await this.databaseService.todo.findMany({
      where: {
        task: {
          contains: qstr,
        },
      },
    });
    return todos;
  }

  async update(updateTodoDto: UpdateTodoDto) {
    await this.databaseService.todo.update({
      data: updateTodoDto,
      where: { id: updateTodoDto.id },
    });
    const alltodos = await this.databaseService.todo.findMany();
    return alltodos;
  }

  async remove(id: number) {
    const result = await this.databaseService.todo.delete({
      where: { id: id },
    });
    return result;
  }
}
