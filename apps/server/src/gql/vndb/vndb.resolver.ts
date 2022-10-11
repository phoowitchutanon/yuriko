import { Resolver, Query } from '@nestjs/graphql'
import { VndbService } from './vndb.service'

@Resolver()
export class VndbResolver {
	constructor(private readonly service: VndbService) {}

	@Query(() => String)
	hello(): string {
		return 'hello world'
	}
}
