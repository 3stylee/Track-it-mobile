import { createSlice } from "@reduxjs/toolkit"
import { loadAthleteActivities } from "../actions/loadAthleteActivities"
import { InitialState } from "../initialState"

const athleteActivitiesSlice = createSlice({
	name: "athleteActivities",
	initialState: InitialState.athleteActivities,
	reducers: {
		resetActivities: (state) => {
			return null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loadAthleteActivities.fulfilled, (state, action) => {
			const { data, loadMore } = action.payload
			if (loadMore && state) {
				return [...state, ...data]
			} else {
				return data
			}
		})
	},
})

export const { resetActivities } = athleteActivitiesSlice.actions
export default athleteActivitiesSlice
