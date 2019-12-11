import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foo } from './foo.entity';

@Injectable()
export class FooService {
  constructor(
    @InjectRepository(Foo)
    private readonly fooRepository: Repository<Foo>,
  ) {}

  findAll(): Promise<Foo[]> {
    return this.fooRepository.find();
  }
}