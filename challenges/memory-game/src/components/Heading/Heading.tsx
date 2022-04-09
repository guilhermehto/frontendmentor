import React from 'react'
import styled from 'styled-components'

const Heading1 = styled.h1`
	font-size: 48px;
`

const Heading2 = styled.h2`
	font-size: 32px;
`

const Heading3 = styled.h3`
	font-size: 20px;
`

type HeadingProps = {
	children: string
	level: 1 | 2 | 3
}

const Heading: React.FC<HeadingProps> = ({ children, level = 2 }) => {
	//this sucks but couldn't think of a better way of doing it
	if (level === 1) return <Heading1>{children}</Heading1>
	if (level === 2) return <Heading2>{children}</Heading2>
	if (level === 3) return <Heading3>{children}</Heading3>

	return <Heading2>{children}</Heading2>
}

export { Heading }
