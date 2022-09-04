import React from 'react'

type HeadingProps = {
	children: string
	className: string
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
	return <h1 className={`text-2xl text-white ${className}`}>{children}</h1>
}

export { Heading }
