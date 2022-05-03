const GAME_OPTIONS_INITIAL_STATE = {
	numberOfPlayers: 1,
	gridSize: 4,
	theme: 'numbers',
}

type GameOptionsFields = {
	numberOfPlayers: number
	gridSize: number
	theme: string
}

type GameOptionsSetters = {
	setGameOptions: (newOptions: GameOptionsFields) => void
}

type GameOptions = GameOptionsSetters & GameOptionsFields

const getGameOptionsSlice = (set: any) => ({
	gameOptions: {
		...GAME_OPTIONS_INITIAL_STATE,
		setGameOptions: (newOptions: GameOptionsFields) =>
			set((state: any) => ({ gameOptions: { ...state.gameOptions, ...newOptions } })),
	},
})

export { getGameOptionsSlice }
export type { GameOptions }
