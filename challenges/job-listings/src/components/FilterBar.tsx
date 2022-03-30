import { Tag } from './Tag'
import iconRemove from '../assets/icon-remove.svg'

type FilterBarProps = {
	filters: string[]
	className?: string
	onFilterRemoved?: (filter: string) => void
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, className, onFilterRemoved }) => {
	const handleOnRightIconClick = (filter: string) => {
		onFilterRemoved && onFilterRemoved(filter)
	}
	return (
		<div className={`bg-white flex flex-wrap gap-4 p-5 rounded shadow ${className}`}>
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
	)
}

export { FilterBar }
