import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';
import { Foo } from './foo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Foo])],
  exports: [FooService],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
