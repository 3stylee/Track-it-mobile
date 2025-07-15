import { View, Text, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { getActivityStats } from "@/utils/getActivityStats"
import { styles } from "./styles"
import { getMapUrl } from "@/utils/getMapboxEndpoint"

import { useRouter } from "expo-router"
import StatsRow from "./statsRow"

export interface RouteMapProps {
	polyline: string
	name: string
	time: number
	distance: number
	id: number
	speed: number
	predictedType: string
	start: string
}

export default function RouteMap({ polyline, speed, name, time, distance, id, predictedType, start }: RouteMapProps) {
	const [imageLoaded, setImagedLoaded] = useState(false)
	const router = useRouter()

	let url: string = require("../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		url = getMapUrl(polyline)
	}
	const stats = getActivityStats(distance, speed, time)

	return (
		<View style={styles.card}>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => router.push({ pathname: "/[id]", params: { id: String(id), from: "Activities" } })}>
				<Image
					source={{ uri: url }}
					style={styles.image}
					onLoad={() => {
						setImagedLoaded(true)
					}}
					alt="Route map"
				/>
				<Text style={styles.title}>{name}</Text>
				<StatsRow stats={stats} />
			</TouchableOpacity>
		</View>
	)
}
