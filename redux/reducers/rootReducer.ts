import { combineSlices } from "@reduxjs/toolkit"
import userDataSlice from "./userDataReducer"
import athleteActivitiesSlice from "./athleteActivitiesReducer"
import loadMoreSlice from "./loadMoreReducer"

export const rootReducer = combineSlices(userDataSlice, athleteActivitiesSlice, loadMoreSlice)
