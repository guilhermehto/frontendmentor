import create from 'zustand'

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

type GameStore = {
	gameOptions: GameOptions
}

const useGameStore = create<GameStore>((set) => ({
	gameOptions: {
		...GAME_OPTIONS_INITIAL_STATE,
		setGameOptions: (newOptions: GameOptionsFields) =>
			set((state) => ({ gameOptions: { ...state.gameOptions, ...newOptions } })),
	},
}))

export { useGameStore }
