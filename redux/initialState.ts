import { State } from "@/models/state"

export const InitialState = {
	loadMore: {
		loadingMore: false,
		hasMore: true,
		page: 1,
	},
	athleteActivities: null,
} as State
