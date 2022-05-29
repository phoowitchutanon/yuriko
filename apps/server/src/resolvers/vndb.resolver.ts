import {
  Arg,
  Query,
  Resolver,
} from 'type-graphql'

import { vnDbStatusResponse, vnInfoResponse } from '../types/vn.types'

import vndbService from '../services/vndb.service'

@Resolver()
export class vndbResolver {
  @Query(() => vnDbStatusResponse)
  async getVNDbStatus() {
    try {
      const data = await vndbService.getStatus()
      return { message: 'Successful', data }
    }
    catch (err) {
      return { message: 'Internal server error' }
    }
  }

  @Query(() => vnInfoResponse)
  async getVNById(@Arg('id') id: number) {
    try {
      const data = await vndbService.getVisualNovelById(id)
      const dataItems = { ...data.items }['0']
      return { message: 'Successful', data: dataItems }
    }
    catch (err) {
      return { message: 'Internal server error' }
    }
  }
}
