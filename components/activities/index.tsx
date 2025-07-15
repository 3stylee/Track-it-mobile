import { View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUserData } from "@/redux/actions/loadUserData"

import DataContainer from "./dataContainer"
import { State } from "@/models/state"
import { AppDispatch } from "@/app/_layout"

export default function Activities() {
	const dispatch = useDispatch<AppDispatch>()
	const userData = useSelector((state: State) => state.userData)

	useEffect(() => {
		if (userData.access_token === "") {
			dispatch(loadUserData())
		}
	}, [])

	if (userData.access_token === "") return null
	return (
		<View>
			<DataContainer />
		</View>
	)
}
