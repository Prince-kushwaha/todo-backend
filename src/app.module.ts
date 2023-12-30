import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [DatabaseModule, TodoModule],
  controllers: [AppController],
})
export class AppModule {}
