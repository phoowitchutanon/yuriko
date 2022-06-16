import { Field, InterfaceType } from 'type-graphql'

@InterfaceType()
export class baseResponse {
  @Field(() => String)
    message: string

  @Field(() => String, { nullable: true })
    error?: string

  @Field(() => Boolean)
    ok: boolean
}
