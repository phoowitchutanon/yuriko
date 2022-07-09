import {
  Arg,
  Int,
  Query,
  Resolver,
} from 'type-graphql'

import {
  vnInfoResponse,
  vnStatusResponse,
} from '@qltypes/vn.types'

import {
  getStatus,
  getVisualNovelById,
  getVisualNovelByName,
} from '@services/vndb.service'

@Resolver()
export default class vndbResolver {
  @Query(() => vnStatusResponse)
  async getStatus(): Promise<vnStatusResponse | undefined> {
    const data = await getStatus()
    return { ok: true, message: 'Successful', data }
  }

  @Query(() => vnInfoResponse)
  async getVnById(@Arg('id', () => Int) id: number): Promise<vnInfoResponse | undefined> {
    const data = await getVisualNovelById(id)
    const dataItems = { ...data.items }['0']
    return { ok: true, message: 'Successful', data: dataItems }
  }

  @Query(() => vnInfoResponse)
  async getVnByName(@Arg('name', () => String) name: string): Promise<vnInfoResponse | undefined> {
    const data = await getVisualNovelByName(name)
    const dataItems = { ...data.items }['0']
    return { ok: true, message: 'Successful', data: dataItems }
  }
}
