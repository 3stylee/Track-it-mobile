import { LRUCache } from "lru-cache"
import { getDocs } from "firebase/firestore"
import { buildFilteredQuery } from "../../utils/buildFilteredQuery"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { PAGE_SIZE, USER_ID } from "@/constants/activities"
import { setHasMore, setLoadingMore } from "../reducers/loadMoreReducer"

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadAthleteActivities = createAsyncThunk(
	"activities/loadAthleteActivities",
	async ({ dateBefore, dateAfter }: { dateBefore?: number; dateAfter?: number }, { getState, dispatch }) => {
		let { loadMore: page } = getState() as any
		const loadingMore = page > 0
		loadingMore && dispatch(setLoadingMore(true))

		// Check if data is cached
		const cacheKey = `${page}-${dateBefore}-${dateAfter}`
		if (cache.has(cacheKey)) {
			return cache.get(cacheKey)
		}

		// Otherwise, fetch data from Firestore
		try {
			const uId = USER_ID
			const q = buildFilteredQuery(uId, getState, page, dateBefore, dateAfter)
			const activities = (await getDocs(q)).docs.map((doc) => doc.data())
			cache.set(cacheKey, activities)
			activities.length < PAGE_SIZE && dispatch(setHasMore(false))
			loadingMore && dispatch(setLoadingMore(false))
			return activities
		} catch (error: any) {
			throw new Error(loadingMore ? "Failed to load more activities" : "Failed to load athlete activities")
		}
	}
)
