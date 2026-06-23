// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module'; // Tells NestJS to look inside the admin folder

@Module({
  imports: [AdminModule], // Registers your admin module globally
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}