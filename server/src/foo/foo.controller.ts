import { Controller, Get } from '@nestjs/common';
import { FooService} from './foo.service';

@Controller('foo')
export class FooController {
    constructor(private readonly fooService: FooService) {}

    @Get()
    getHello(): string {
      return this.fooService.getHello();
    }
}
