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
  async getStatus(): Promise<vnDbStatusResponse | undefined> {
    try {
      const data = await vndbService.getStatus()
      return { message: 'Successful', data, ok: true }
    }
    catch (err: unknown) {
      if (typeof err === 'string')
        return { message: 'Internal server error', error: err, ok: false }
    }
  }

  @Query(() => vnInfoResponse)
  async getVnById(@Arg('id') id: number): Promise<vnInfoResponse | undefined> {
    try {
      const data = await vndbService.getVisualNovelById(id)
      const dataItems = { ...data.items }['0']
      return { message: 'Successful', data: dataItems, ok: true }
    }
    catch (err: unknown) {
      if (typeof err === 'string')
        return { message: 'Internal server error', error: err, ok: false }
    }
  }

  @Query(() => vnInfoResponse)
  async getVnByName(@Arg('name') name: string): Promise<vnInfoResponse | undefined> {
    try {
      const data = await vndbService.getVisualNovelByName(name)
      const dataItems = { ...data.items }['0']
      return { message: 'Successful', data: dataItems, ok: true }
    }
    catch (err: unknown) {
      if (typeof err === 'string')
        return { message: 'Internal server error', error: err, ok: false }
    }
  }
}
