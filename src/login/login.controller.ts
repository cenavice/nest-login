import { Controller, Bind, Get, Req, Param, Post } from '@nestjs/common';
import { log } from 'console';

@Controller('login')
export class LoginController {
  @Post()
  @Bind(Req())
  create(request): string {

    console.log('====================================');
    console.log(request.body);
    console.log('====================================');
    
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id}`;
  }
}
