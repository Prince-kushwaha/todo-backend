import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto);
  }

  @Get(':keyword')
  async searchTodo(@Param('keyword') searchKeyword: string) {
    return await this.todoService.search(searchKeyword);
  }

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Patch()
  async update(@Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.update(updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.todoService.remove(+id);
  }
}
