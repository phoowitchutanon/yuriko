import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql'

@Resolver()
export class vndbResolver {
  @Query(() => String)
  hello() {
    return 'Hello World!'
  }
}