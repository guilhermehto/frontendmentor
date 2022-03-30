import classNames from 'classnames'

import { ReactNode } from 'react'

type TagProps = {
	children: string
	onClick?: (value: string) => void
	rightIcon?: ReactNode
	onRightIconClick?: () => void
}

const Tag: React.FC<TagProps> = ({ children, onClick, rightIcon, onRightIconClick }) => {
	const classes = classNames([
		'text-xs font-bold text-desaturated-cyan bg-cyan py-1 px-2 hover:cursor-pointer',
		{
			'rounded active:bg-desaturated-cyan active:cursor-pointer active:text-white':
				!rightIcon,
		},
		{ 'rounded-l': rightIcon },
	])

	return (
		<div className="flex items-center">
			<div className={classes} onClick={() => onClick && onClick(children)}>
				{children}
			</div>
			{rightIcon ? (
				<button
					onClick={onRightIconClick}
					className="bg-desaturated-cyan rounded-r font-bold text-white px-2 min-h-full flex items-center active:bg-black"
				>
					{rightIcon}
				</button>
			) : undefined}
		</div>
	)
}

export { Tag }
