import { Controller, Bind, Get, Req, Param, Post } from '@nestjs/common';

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
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id}`;
  }
}
