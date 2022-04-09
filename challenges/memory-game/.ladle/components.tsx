import type { GlobalProvider } from '@ladle/react'

import { GlobalStyles } from '../src/theme/GlobalStyles'

export const Provider: GlobalProvider = ({ children }) => (
	<>
		<GlobalStyles />
		{children}
	</>
)
