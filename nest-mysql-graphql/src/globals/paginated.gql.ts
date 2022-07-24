import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

interface IPagination {
  page?: number;
  size?: number;
}

export interface IPaginatedType<T> {
  list: T[];
  total: number;
  pagination: IPagination;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  console.log('classRef', classRef, classRef.name);
  @ObjectType(`${classRef.name}Pagination`)
  abstract class Pagination {
    @Field(() => Number)
    size: number;

    @Field(() => Number)
    page: number;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field(() => Pagination, { nullable: true })
    pagination: Pagination;

    @Field(() => [classRef], { nullable: true })
    list: T[];

    @Field(() => Int)
    total: number;
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
