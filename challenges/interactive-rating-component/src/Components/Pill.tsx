import React from 'react'

type PillProps = {
	children: string
}

const Pill: React.FC<PillProps> = ({ children }) => {
	return (
		<div className="bg-dark-blue text-orange text-center text-sm leading-none rounded-full px-3 py-1">
			{children}
		</div>
	)
}

export { Pill }
