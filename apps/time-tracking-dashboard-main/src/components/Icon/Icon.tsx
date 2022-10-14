import React from 'react'

import './Icon.css'

type IconProps = {
	type: 'work' | 'play' | 'study' | 'exercise' | 'social' | 'self-care' | 'ellipsis' | string
}

const Icon: React.FC<IconProps> = ({ type }) => {
	return <img src={`../../../src/images/icon-${type}.svg`} />
}

export { Icon }
