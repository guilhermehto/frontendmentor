import React from 'react'

type PillProps = {
	children: string
	className?: string
}

const Pill: React.FC<PillProps> = ({ children, className }) => {
	return (
		<div
			className={`bg-dark-blue text-orange text-center text-sm leading-none rounded-full flex justify-center items-end py-2 px-4 ${className}`}
		>
			{children}
		</div>
	)
}

export { Pill }
