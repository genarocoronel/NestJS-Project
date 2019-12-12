import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooController } from './foo/foo.controller';
import { Foo } from './foo/foo.entity';
import { AppModule } from './app.module';

describe('AppController', () => {
  let appController: AppController;
  let fooController: FooController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports:[AppModule]
    }).compile();

    appController = app.get<AppController>(AppController);
    fooController = app.get<FooController>(FooController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
