import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserEntity], { name: 'users', nullable: true })
  users(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Query(() => UserEntity, { nullable: true })
  user(@Args('id') id: number): Promise<UserEntity> {
    return this.userService.findOne(id);
  }
}
