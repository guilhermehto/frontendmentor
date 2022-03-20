import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		backgroundColor: string
		primary: string
		textColor: string
		buttonTextColor: string
		headingColor: string
		foregroundColor: string
		activeColor: string
		secondaryActiveColor: string
		disabledColor: string
		disabled: boolean
		shadow: string
		tabletBreakPoint: string
		desktopBreakPoint: string
	}
}
