import { Tag } from './Tag'
import iconRemove from '../assets/icon-remove.svg'
import { Button } from './Button'

type FilterBarProps = {
	filters: string[]
	className?: string
	onFilterRemoved?: (filter: string) => void
	onClearClicked?: () => void
}

const FilterBar: React.FC<FilterBarProps> = ({
	filters,
	className,
	onFilterRemoved,
	onClearClicked,
}) => {
	const handleOnRightIconClick = (filter: string) => {
		onFilterRemoved && onFilterRemoved(filter)
	}
	return (
		<div className={`flex justify-between bg-white flex p-5 rounded shadow ${className}`}>
			<div className="flex flex-wrap gap-4">
				{filters.map((filter: string) => (
					<Tag
						rightIcon={<img src={iconRemove} alt="x shaped icon" />}
						key={filter}
						onRightIconClick={() => handleOnRightIconClick(filter)}
					>
						{filter}
					</Tag>
				))}
			</div>
			<div className="flex pr-1">
				<Button onClick={onClearClicked}>Clear</Button>
			</div>
		</div>
	)
}

export { FilterBar }
