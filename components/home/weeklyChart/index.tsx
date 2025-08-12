import React from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"

const weeklyData = [
	{ day: "Mon", miles: 6.2, isToday: false },
	{ day: "Tue", miles: 0, isToday: false },
	{ day: "Wed", miles: 8.5, isToday: false },
	{ day: "Thu", miles: 4.1, isToday: false },
	{ day: "Fri", miles: 0, isToday: false },
	{ day: "Sat", miles: 12.5, isToday: false },
	{ day: "Sun", miles: 5.8, isToday: true },
]

export function WeeklyChart() {
	const maxMiles = Math.max(...weeklyData.map((d) => d.miles))

	return (
		<View style={styles.container}>
			<View style={styles.chart}>
				{weeklyData.map((data, index) => {
					const height = maxMiles > 0 ? (data.miles / maxMiles) * 100 : 0

					return (
						<View key={index} style={styles.barContainer}>
							<View style={styles.barWrapper}>
								<View
									style={[
										styles.bar,
										{
											height: `${height}%`,
											backgroundColor: data.isToday
												? "#8b5cf6"
												: data.miles > 0
												? "#374151"
												: "#1f2937",
										},
									]}
								/>
							</View>
							<Text style={[styles.dayLabel, data.isToday && styles.todayLabel]}>{data.day}</Text>
							<Text style={styles.milesLabel}>{data.miles > 0 ? data.miles.toFixed(1) : "−"}</Text>
						</View>
					)
				})}
			</View>
		</View>
	)
}
