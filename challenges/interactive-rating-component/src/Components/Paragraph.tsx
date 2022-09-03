import React from 'react'

type ParagraphProps = {
	children: string
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
	return <p className="text-light-gray text-sm">{children}</p>
}

export { Paragraph }
