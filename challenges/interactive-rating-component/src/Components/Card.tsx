import React from 'react'

type CardProps = {
	children: React.ReactNode
	className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return (
		<div className={`flex flex-col rounded-lg bg-dark-gradient p-6 ${className}`}>
			{children}
		</div>
	)
}

export { Card }
