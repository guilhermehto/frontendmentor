import React from 'react'

type CardProps = {
	children: React.ReactNode
	className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return (
		<div
			className={`flex flex-col rounded-lg bg-dark-gradient p-6 md:p-8 max-w-[412px] ${className}`}
		>
			{children}
		</div>
	)
}

export { Card }
