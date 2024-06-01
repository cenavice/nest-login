import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginController } from './login/login.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
