import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Test) private readonly userRepository: Repository<Test>,
  ) {}

  async create(createFormDto: CreateFormDto) {
    const newUser = this.userRepository.create(createFormDto);
    return await this.userRepository.save(newUser);
  }

  async findOne(username: string) {
    return await this.userRepository.findOne({ where: { username: username } });
  }

  async update(username: string, updateFormDto: UpdateFormDto) {
    const updatedForm = { ...updateFormDto, username };
    return await this.userRepository.upsert(updatedForm, {
      conflictPaths: ['username'],
      skipUpdateIfNoValuesChanged: true,
      upsertType: 'on-conflict-do-update',
    });
  }
}
