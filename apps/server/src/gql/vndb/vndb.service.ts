import VNDB from 'vndb-api'
import { Injectable } from '@nestjs/common'

@Injectable()
export class VndbService {
	vndb = new VNDB('yuriko', {
		host: 'api.vndb.org',
		port: 19535,
		encoding: 'utf-8',
		queryLimit: 10,
		queryInterval: 3000,
		minConnection: 1,
		maxConnection: 10,
		idleTimeoutMillis: 3000,
		acquireTimeout: 3000
	})
}
