import type { MiddlewareFn } from 'type-graphql'

import Logger from '@yuriko/logger'

const errorInterceptor: MiddlewareFn<any> = async ({ context, info }, next) => {
  try {
    return await next()
  }
  catch (err: any) {
    Logger.error(err, context, info)
    return { ok: false, message: err }
  }
}

export default errorInterceptor
