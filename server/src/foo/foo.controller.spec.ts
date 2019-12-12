import { Test, TestingModule } from '@nestjs/testing';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';
import { Foo } from './foo.entity';
import {AppService} from '../app.service';
import {AppController } from '../app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FooModule } from './foo.module';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
import * as request from 'supertest';


describe('Foo Controller', () => {
  let controller: FooController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[AppModule]
    }).compile();
    app = module.createNestApplication();
    controller = module.get<FooController>(FooController);
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('foo', () => {
    it('should return empty list', async () => {
      await request(app.getHttpServer())
      .get(`/foo`)
      .then(res =>{
        expect(res.body).toEqual([]);
      })
    });
  });
});
