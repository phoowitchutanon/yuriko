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

	});

	async getStatus() {
		const data = await this.vndb
			.query('dbstats')
			.then((res) => {
				return res
			})
			.catch((res) => {
				return res
			})
		return data
	}
	
	async getVisualNovelById(id: number) {
		const data = await this.vndb
			.query(
				`get vn basic,details,anime,relations,tags,stats,screens,staff (id = ${id})`,
			)
			.then((res) => {
				return res
			})
			.catch((res) => {
				return res
			})
		return data
	}
	
	async  getVisualNovelByName(name: string) {
		const data = await this.vndb
			.query(
				`get vn basic,details,anime,relations,tags,stats,screens,staff (search ~ "${name}")`,
			)
			.then((res) => {
				return res
			})
			.catch((res) => {
				return res
			})
		return data
	}
}
