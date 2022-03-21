import React, { createContext, useReducer } from 'react'

// hard coded values because I don't want to mess up the screenshot on frontendmentor
const INITIAL_USER = {
	login: 'octocat',
	avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
	location: 'San Francisco',
	company: '@github',
	bio: null,
	twitterUsername: null,
	name: 'The Octocat',
	blog: 'https://github.blog',
	joinedAt: '2011-01-25T18:44:36Z',
	repos: 8,
	followers: 5276,
	following: 9,
}

const INITIAL_STATE = {
	user: INITIAL_USER,
	userFetchSuccess: (newUser: any) => {},
	userFetchFail: () => {},
}

const userReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'user.fetch.success':
			return action.payload
		case 'user.fetch.fail':
			return state
	}
}

const UserContext = createContext(INITIAL_STATE)

const UserProvider: React.FC = ({ children }) => {
	const [user, dispatch] = useReducer(userReducer, INITIAL_USER)
	const contextValue = {
		user: user,
		userFetchSuccess: (newUser: any) =>
			dispatch({ type: 'user.fetch.success', payload: newUser }),
		userFetchFail: () => dispatch({ type: 'user.fetch.fail' }),
	}

	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
