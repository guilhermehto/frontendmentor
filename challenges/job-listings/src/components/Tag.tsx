type TagProps = {
	children: string
	onClick?: (value: string) => void
}

const Tag: React.FC<TagProps> = ({ children, onClick }) => {
	return (
		<div
			className="text-xs font-bold text-desaturated-cyan bg-cyan py-1 px-2 rounded"
			onClick={() => onClick && onClick(children)}
		>
			{children}
		</div>
	)
}

export { Tag }
