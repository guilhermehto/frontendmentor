import create from 'zustand'

import { GameOptions, getGameOptionsSlice } from './slices/game-options'

type GameStore = {
	gameOptions: GameOptions
}

const useGameStore = create<GameStore>((set) => ({
	...getGameOptionsSlice(set),
}))

export { useGameStore }
