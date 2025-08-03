import { combineSlices } from "@reduxjs/toolkit"
import athleteActivitiesSlice from "./athleteActivitiesReducer"
import loadMoreSlice from "./loadMoreReducer"

export const rootReducer = combineSlices(athleteActivitiesSlice, loadMoreSlice)
