import React from 'react'

type ParagraphProps = {
	children: string
	className?: string
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
	return <p className={`text-light-gray text-sm leading-6 ${className}`}>{children}</p>
}

export { Paragraph }
