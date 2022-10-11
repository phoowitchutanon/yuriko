import type { NextPage } from 'next'
import { Flex, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
	return (
		<Flex direction="column" width="screen" height="screen" justify="center">
			<Text size="xl" align="center">
				Hello World
			</Text>
		</Flex>
	)
}

export default Home
