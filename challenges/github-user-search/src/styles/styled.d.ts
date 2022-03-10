import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		backgroundColor: string
		primary: string
		textColor: string
		headingColor: string
		foregroundColor: string
	}
}
