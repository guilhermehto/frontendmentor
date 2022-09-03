import React from 'react'

type HeadingProps = {
	children: string
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
	return <h1 className="text-2xl text-white">{children}</h1>
}

export { Heading }
