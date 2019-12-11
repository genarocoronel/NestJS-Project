import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Foo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  string_field: string;
}