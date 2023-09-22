import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';

@Controller('/api/forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    this.formsService.create(createFormDto);
  }

  // @Get()
  // async findAll() {
  //   try {
  //     // Call a method from your service to retrieve data from Supabase
  //     const formData = await this.formsService.findAllFormData();

  //     // Return the retrieved data as the response
  //     return formData;
  //   } catch (error) {
  //     // Handle errors and return an appropriate response
  //     console.error('Error fetching form data:', error);
  //     throw error; // You can customize error handling based on your requirements
  //   }
  // }

  @Get(':username')
  findOne(@Param('username') username: string) {
    const formData = this.formsService.findOne(username);
    return formData;
  }

  @Put(':username')
  update(
    @Param('username') username: string,
    @Body() updateFormDto: UpdateFormDto,
  ) {
    this.formsService.update(username, updateFormDto);
  }
}
