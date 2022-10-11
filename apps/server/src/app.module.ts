import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ScheduleModule } from '@nestjs/schedule'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { VndbModule } from './gql/vndb/vndb.module'

@Module({
	imports: [
		ScheduleModule.forRoot(),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			cache: 'bounded',
			playground: false,
			introspection: true,
			csrfPrevention: true,
			autoSchemaFile: true,
			driver: ApolloDriver,
			context: ({ req, res }) => ({ req, res }),
			plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })]
		}),
		VndbModule
	]
})
export class AppModule {}
