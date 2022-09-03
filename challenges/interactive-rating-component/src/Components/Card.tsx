import React from 'react'

type CardProps = {
	children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
	return <div className="flex flex-col rounded-lg bg-dark-gradient p-6">{children}</div>
}

export { Card }
