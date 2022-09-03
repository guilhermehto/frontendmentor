import React from 'react'
type CardProps = {
	children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
	return <div className="rounded-lg bg-dark-gradient">{children}</div>
}

export { Card }
