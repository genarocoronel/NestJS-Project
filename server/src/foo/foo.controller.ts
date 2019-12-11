import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';
import { Foo } from './foo.entity';

@Controller('foo')
export class FooController {
  constructor(private readonly fooService: FooService) {}

  @Get()
  findAll(): Promise<Foo[]> {
    return this.fooService.findAll();
  }
}
