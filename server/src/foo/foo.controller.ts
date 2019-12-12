import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';
import { Foo } from './foo.entity';

@Controller('foo')
export class FooController {
  constructor(private readonly fooService: FooService) {}

  @Get()
  async findAll(): Promise<Foo[]> {
    let res = await this.fooService.findAll();
    return res;
  }
}
