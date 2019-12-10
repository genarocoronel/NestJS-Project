import { Module } from '@nestjs/common';
import { FooController } from './foo.controller';
import { FooService } from './foo.service';

@Module({
  imports: [],
  exports: [FooService],
  controllers: [FooController],
  providers: [FooService],
})
export class FooModule {}
