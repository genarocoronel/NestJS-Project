import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Foo } from './foo/foo.entity';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'admin',
      password: 'password',
      database: 'sample_db',
      entities: [Foo],
      synchronize: true,
    }),
    FooModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
