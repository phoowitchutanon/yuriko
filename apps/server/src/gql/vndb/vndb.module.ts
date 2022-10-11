import { Module } from '@nestjs/common'
import { VndbResolver } from './vndb.resolver'
import { VndbService } from './vndb.service'

@Module({
	providers: [VndbResolver, VndbService]
})
export class VndbModule {}
