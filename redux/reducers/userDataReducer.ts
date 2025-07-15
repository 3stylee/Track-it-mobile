import { createSlice } from "@reduxjs/toolkit"
import { loadUserData } from "../actions/loadUserData"
import { UserData } from "@/models/state"
import { InitialState } from "../initialState"

const userDataSlice = createSlice({
	name: "userData",
	initialState: InitialState.userData,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadUserData.fulfilled, (state, action) => {
			return { ...state, ...(action.payload as UserData) }
		})
	},
})

export default userDataSlice
