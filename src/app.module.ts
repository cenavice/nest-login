import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [UserModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        { path: 'user', method: RequestMethod.GET },
      )
      .forRoutes(UserController);
  }
}
