import { View, Text, FlatList } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAthleteActivities } from "@/redux/actions/loadAthleteActivities"
import { State } from "@/models/state"
import RouteMap from "../routeMap"
import LoadingFooter from "../loadingFooter"
import LoadingScreen from "../loadingScreen"
import { AppDispatch } from "@/app/_layout"

export default function DataContainer() {
	const dispatch = useDispatch<AppDispatch>()
	const athleteActivities = useSelector((state: State) => state.athleteActivities)
	const { hasMore, loadingMore } = useSelector((state: State) => state.loadMore)

	useEffect(() => {
		if (athleteActivities === null) {
			dispatch(loadAthleteActivities({}))
		}
	}, [dispatch, athleteActivities])

	const handleLoadMore = () => {
		if (!loadingMore && athleteActivities !== null) {
			dispatch(loadAthleteActivities({ loadMore: true }))
		}
	}

	if (athleteActivities === null) {
		return <LoadingScreen />
	}

	if (athleteActivities !== null) {
		return (
			<View style={{ flex: 1 }}>
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
						onEndReached={hasMore ? handleLoadMore : undefined}
						onEndReachedThreshold={0.1}
						keyExtractor={(item) => item.id.toString()}
						ListFooterComponent={<LoadingFooter isLoading={loadingMore} />}
					/>
				) : (
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
						<Text>No activities found</Text>
					</View>
				)}
			</View>
		)
	}

	return null
}
