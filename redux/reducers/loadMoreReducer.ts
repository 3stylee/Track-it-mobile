import { createSlice } from "@reduxjs/toolkit"
import { InitialState } from "../initialState"

const loadMoreSlice = createSlice({
	name: "loadMore",
	initialState: InitialState.loadMore,
	reducers: {
		setLoadingMore: (state, action) => {
			state.loadingMore = action.payload
		},
		setHasMore: (state, action) => {
			state.hasMore = action.payload
		},
		incrementPage: (state) => {
			state.page += 1
		},
		resetPage: (state) => {
			state.page = 1
		},
	},
})
export const { setLoadingMore, setHasMore, incrementPage, resetPage } = loadMoreSlice.actions
export default loadMoreSlice
