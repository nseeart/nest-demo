import { ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../entities/user.entity';
import { Paginated } from '../../../globals/paginated.gql';

@ObjectType()
export class UserListPaginated extends Paginated<UserEntity>(UserEntity) {}
