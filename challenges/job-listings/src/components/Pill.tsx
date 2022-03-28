import classnames from 'classnames'

type PillProps = {
	isPrimary?: boolean
}

const Pill: React.FC<PillProps> = ({ children, isPrimary = false }) => {
	const classes = classnames(
		'rounded-full text-tiny uppercase text-white flex items-center px-2 py-1 leading-none',
		{ 'bg-black': !isPrimary },
		{ 'bg-desaturated-cyan': isPrimary }
	)
	return <div className={classes}>{children}</div>
}

export { Pill }
