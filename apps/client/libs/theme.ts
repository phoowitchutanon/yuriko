import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false
}

export const theme = extendTheme({
	config,
	styles: {
		global: (props: any) => ({
			body: {
				bg: mode('', '')(props)
			}
		})
	},
	components: {
		Container: {
			baseStyle: {
				maxW: 'container.lg'
			}
		}
	}
})
