import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from 'src/typeorm';
import { FormsController } from './forms.controller'; // Import your controller
import { FormsService } from './forms.service'; // Import your service

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [FormsController], // Add your controller(s) here
  providers: [FormsService], // Add your service(s) here
})
export class FormsModule {}
