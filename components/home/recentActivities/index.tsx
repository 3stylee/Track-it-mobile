import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MapPin, Clock, Zap } from "lucide-react-native"
import { styles } from "./styles"

const recentActivities = [
	{
		id: "1",
		name: "Morning Long Run",
		distance: 12.5,
		duration: "1:32:45",
		pace: "7:25",
		type: "Long Run",
		route: "Central Park Loop",
	},
	{
		id: "2",
		name: "Tempo Run",
		distance: 6.2,
		duration: "42:18",
		pace: "6:49",
		type: "Tempo",
		route: "Riverside Drive",
	},
	{
		id: "3",
		name: "Easy Recovery",
		distance: 4.0,
		duration: "32:15",
		pace: "8:03",
		type: "Recovery",
		route: "Park Avenue",
	},
]

export function RecentActivities() {
	const getTypeColor = (type: string) => {
		switch (type) {
			case "Long Run":
				return "#8b5cf6"
			case "Tempo":
				return "#f59e0b"
			case "Recovery":
				return "#10b981"
			default:
				return "#6b7280"
		}
	}

	return (
		<View style={styles.container}>
			{recentActivities.map((activity, index) => (
				<TouchableOpacity key={activity.id} style={styles.activityItem}>
					<View style={styles.activityHeader}>
						<View>
							<Text style={styles.activityName}>{activity.name}</Text>
							<View style={styles.routeContainer}>
								<MapPin size={12} color="#6b7280" />
								<Text style={styles.route}>{activity.route}</Text>
							</View>
						</View>
						<View style={[styles.typeBadge, { backgroundColor: `${getTypeColor(activity.type)}20` }]}>
							<Text style={[styles.typeBadgeText, { color: getTypeColor(activity.type) }]}>
								{activity.type}
							</Text>
						</View>
					</View>

					<View style={styles.activityStats}>
						<View style={styles.statItem}>
							<Text style={styles.statValue}>{activity.distance}</Text>
							<Text style={styles.statLabel}>miles</Text>
						</View>
						<View style={styles.statItem}>
							<Clock size={14} color="#6b7280" />
							<Text style={styles.statValue}>{activity.duration}</Text>
						</View>
						<View style={styles.statItem}>
							<Zap size={14} color="#6b7280" />
							<Text style={styles.statValue}>{activity.pace}</Text>
						</View>
					</View>
					{index < recentActivities.length - 1 && <View style={styles.separator} />}
				</TouchableOpacity>
			))}
		</View>
	)
}
