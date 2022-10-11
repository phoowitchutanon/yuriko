import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
//
;(async () => {
	const app = await NestFactory.create(AppModule, {
		bodyParser: true,
		cors: { origin: '*' }
	})

	await app.listen(4000, '0.0.0.0')

	console.info(`\n\n Server listening on http://0.0.0.0:4000 \n\n`)
})()
