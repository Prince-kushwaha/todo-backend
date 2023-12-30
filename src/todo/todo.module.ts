import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TodoController],
  imports: [DatabaseModule],
  providers: [TodoService],
})
export class TodoModule {}
