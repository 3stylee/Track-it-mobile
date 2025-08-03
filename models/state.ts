import { AthleteActivities } from "./activities"

export interface LoadMore {
	loadingMore: boolean
	hasMore: boolean
	page: number
}

export type State = {
	loadMore: LoadMore
	athleteActivities: AthleteActivities | null
}
