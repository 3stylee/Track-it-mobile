import { createSlice } from "@reduxjs/toolkit"
import { loadAthleteActivities } from "../actions/loadAthleteActivities"
import { InitialState } from "../initialState"

const athleteActivitiesSlice = createSlice({
	name: "athleteActivities",
	initialState: InitialState.athleteActivities,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadAthleteActivities.fulfilled, (_, action) => {
			return action.payload
		})
	},
})

export default athleteActivitiesSlice
