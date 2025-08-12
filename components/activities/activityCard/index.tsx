import React from "react"
import { View, Text, Image } from "react-native"
import { MapPin, Clock, Zap, TrendingUp } from "lucide-react-native"
import { styles } from "./styles"

interface ActivityCardProps {
	activity: {
		id: string
		name: string
		distance: number
		duration: string
		pace: string
		type: string
		date: string
		elevation: number
		route: string
	}
}

export function ActivityCard({ activity }: ActivityCardProps) {
	const getTypeColor = (type: string) => {
		switch (type) {
			case "Long Run":
				return "#8b5cf6"
			case "Tempo":
				return "#f59e0b"
			case "Intervals":
				return "#ef4444"
			case "Recovery":
				return "#10b981"
			default:
				return "#6b7280"
		}
	}

	// Mock route image - in a real app this would come from Strava API
	const routeImageUrl = `https://images.pexels.com/photos/1556710/pexels-photo-1556710.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop`

	return (
		<View style={styles.card}>
			<View style={styles.header}>
				<View style={styles.titleContainer}>
					<Text style={styles.activityName}>{activity.name}</Text>
					<View style={styles.routeContainer}>
						<MapPin size={12} color="#6b7280" />
						<Text style={styles.route}>{activity.route}</Text>
					</View>
				</View>
				<View style={[styles.typeBadge, { backgroundColor: `${getTypeColor(activity.type)}20` }]}>
					<Text style={[styles.typeBadgeText, { color: getTypeColor(activity.type) }]}>{activity.type}</Text>
				</View>
			</View>

			<View style={styles.routeImageContainer}>
				<Image source={{ uri: routeImageUrl }} style={styles.routeImage} resizeMode="cover" />
				<View style={styles.imageOverlay} />
			</View>

			<View style={styles.statsContainer}>
				<View style={styles.mainStats}>
					<View style={styles.statItem}>
						<Text style={styles.statValue}>{activity.distance}</Text>
						<Text style={styles.statLabel}>miles</Text>
					</View>
					<View style={styles.statItem}>
						<Clock size={16} color="#6b7280" />
						<Text style={styles.statValue}>{activity.duration}</Text>
					</View>
					<View style={styles.statItem}>
						<Zap size={16} color="#6b7280" />
						<Text style={styles.statValue}>{activity.pace}</Text>
						<Text style={styles.statLabel}>/mi</Text>
					</View>
				</View>
				<View style={styles.secondaryStats}>
					<View style={styles.statItem}>
						<TrendingUp size={14} color="#8b5cf6" />
						<Text style={styles.elevationValue}>{activity.elevation} ft</Text>
					</View>
					<Text style={styles.dateText}>
						{new Date(activity.date).toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})}
					</Text>
				</View>
			</View>
		</View>
	)
}
