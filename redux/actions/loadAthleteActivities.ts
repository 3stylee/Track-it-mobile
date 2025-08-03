import { LRUCache } from "lru-cache"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { PAGE_SIZE } from "@/constants/activities"
import { setHasMore, setLoadingMore, incrementPage, resetPage } from "../reducers/loadMoreReducer"
import * as SecureStore from "expo-secure-store"
import { State } from "@/models/state"
import { processAthleteActivities } from "@/utils/processAthleteActivities"

let cache = new LRUCache<string, any>({ max: 5, ttl: 3600000 })

export const loadAthleteActivities = createAsyncThunk(
	"loadAthleteActivities",
	async ({ loadMore = false }: { loadMore?: boolean } = {}, { dispatch, getState }) => {
		const accessToken = await SecureStore.getItemAsync("strava_access_token")
		if (!accessToken) {
			throw new Error("No access token found")
		}

		const state = getState() as State
		let page = state.loadMore.page

		if (loadMore) {
			dispatch(incrementPage())
			page = page + 1
		} else {
			dispatch(resetPage())
			page = 1
		}

		const cacheKey = `athleteActivities-${page}`
		if (cache.has(cacheKey)) {
			return { data: cache.get(cacheKey), loadMore }
		}

		dispatch(setLoadingMore(true))
		try {
			const response = await fetch(
				`https://www.strava.com/api/v3/athlete/activities?page=${page}&per_page=${PAGE_SIZE}`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			if (!response.ok) {
				throw new Error("Failed to load activities")
			}

			const data = await response.json()
			const processedData = processAthleteActivities(data)
			cache.set(cacheKey, processedData)
			dispatch(setHasMore(data.length === PAGE_SIZE))
			return { data: processedData, loadMore }
		} finally {
			dispatch(setLoadingMore(false))
		}
	}
)
