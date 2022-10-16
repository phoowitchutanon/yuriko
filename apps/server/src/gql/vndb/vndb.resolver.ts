import { Resolver, Query } from '@nestjs/graphql'
import { VndbService } from './vndb.service'

import { VisualNovel } from './graphql/vndb.schema'

@Resolver()
export class VndbResolver {
	constructor(private readonly service: VndbService) {}

	@Query(() => VisualNovel)
	test() {
		return {
			id: 'test-vn-01',
			vnId: 1,
			metadata: {
				title: 'Cafe Stella',
				original: 'カフェ・ステラ',
				released: 'idk'
			}
		}
	}

}
