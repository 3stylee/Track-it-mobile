import { View, Text, FlatList } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAthleteActivities } from "@/redux/actions/loadAthleteActivities"
import { State } from "@/models/state"
import RouteMap from "../routeMap"
import { AppDispatch } from "@/app/_layout"

export default function DataContainer() {
	const dispatch = useDispatch<AppDispatch>()
	const athleteActivities = useSelector((state: State) => state.athleteActivities)
	const hasMore = useSelector((state: State) => state.loadMore.hasMore)

	useEffect(() => {
		if (athleteActivities === null) {
			dispatch(loadAthleteActivities({}))
		}
	}, [])

	if (athleteActivities !== null) {
		return (
			<View>
				{athleteActivities.length > 0 ? (
					<FlatList
						data={athleteActivities}
						renderItem={({ item }) => (
							<RouteMap
								polyline={item.polyline}
								name={item.title}
								time={item.time}
								distance={item.distance}
								speed={item.speed}
								id={item.id}
								predictedType={item.predictedType}
								start={item.start}
							/>
						)}
						onEndReached={() => {}}
						keyExtractor={(item) => item.id.toString()}
					/>
				) : (
					<Text>No activities</Text>
				)}
			</View>
		)
	}
}
