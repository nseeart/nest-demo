import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('user')
export class UserEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({
    comment: '用户id',
  })
  id: number;

  @Field()
  @Column({
    type: 'varchar',
    width: 255,
    nullable: false,
    comment: '用户名',
  })
  username: string;

  @Field()
  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    comment: '邮件',
  })
  email: string;

  @Field()
  @Column({
    type: 'varchar',
    width: 255,
    nullable: true,
    comment: '密码',
  })
  password: string;

  @Field()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: true,
    comment: '添加时间',
  })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    comment: '更新时间',
  })
  updatedAt: Date;
}
