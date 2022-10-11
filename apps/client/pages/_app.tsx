import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Head>
				<title>Yuriko | Visual Novel Database</title>

				<meta charSet="utf-8" />
				<meta name="title" content="Yuriko | Visual Novel Database" />
				<meta name="imagemode" content="force" />
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#FFFFFF" />

				<meta property="og:title" content="Yuriko | Visual Novel Database" />
				<meta property="og:description" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://vn.lico.moe" />
				<meta property="og:image" content="/og_img.webp" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
