import React from 'react'

import './Profile.css'

type ProfileProps = {
	name: string
	avatarPath: string
	selectedTab: string
	tabs: string[]
	onTimeframeSelected: (timeframeName: string) => void
}

const Profile: React.FC<ProfileProps> = ({
	name,
	avatarPath,
	tabs,
	onTimeframeSelected,
	selectedTab,
}) => {
	return (
		<div>
			<div className="overlay">
				<img src={avatarPath} />
				<div className="name-section">
					<p>Report for</p>
					<h3>{name}</h3>
				</div>
			</div>
			<div className="tabs">
				{tabs.map((tab, index) => (
					<p
						key={tab}
						className={`tab ${
							selectedTab.toLocaleLowerCase() == tab.toLocaleLowerCase()
								? 'is-active'
								: ''
						}`}
						onClick={() => onTimeframeSelected(tab)}
					>
						{tab}
					</p>
				))}
			</div>
		</div>
	)
}

export { Profile }
