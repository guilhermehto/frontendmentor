import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		primary: string
		primaryHover: string
		white: string
		secondary: string
		secondaryHover: string
		secondaryActive: string
		textColor: string
		darkBackground: string
		secondaryTextColor: string
	}
}
