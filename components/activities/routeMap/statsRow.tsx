import React from "react"
import { View, Text } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { Stat } from "@/models/activities"

interface StatsRowProps {
	stats: Stat[]
}

export default function StatsRow({ stats }: StatsRowProps) {
	return (
		<View style={styles.statsRow}>
			{stats.map((stat) => {
				let iconName = ""
				switch (stat.text) {
					case "Distance":
						iconName = "map-marker-distance"
						break
					case "Pace":
						iconName = "run-fast"
						break
					case "Time":
						iconName = "clock-outline"
						break
					default:
						iconName = "information-outline"
				}
				return (
					<View key={stat.text} style={styles.statItem}>
						<MaterialCommunityIcons
							name={iconName as any}
							size={20}
							color="#555"
							style={{ marginBottom: 2 }}
						/>
						<Text style={styles.statLabel}>{stat.text}</Text>
						<Text style={styles.statValue}>
							{stat.value} <Text style={styles.statUnit}>{stat.unit}</Text>
						</Text>
					</View>
				)
			})}
		</View>
	)
}
