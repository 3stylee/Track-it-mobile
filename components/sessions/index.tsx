import React from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Target, TrendingUp, Calendar, MapPin } from "lucide-react-native"
import { router } from "expo-router"
import { styles } from "./styles"

const mockSessions = [
	{
		id: "1",
		name: "Marathon Training Block",
		type: "Long Run",
		activities: 8,
		totalMiles: 96.5,
		avgPace: "7:42",
		dateRange: "Dec 1 - Jan 20",
		description: "Progressive long runs building to 20 miles",
		improvement: "+12% pace improvement",
	},
	{
		id: "2",
		name: "Speed Development",
		type: "Intervals",
		activities: 6,
		totalMiles: 42.3,
		avgPace: "5:28",
		dateRange: "Jan 2 - Jan 18",
		description: "400m-1200m intervals at 5K pace",
		improvement: "+8% speed increase",
	},
	{
		id: "3",
		name: "Base Building",
		type: "Easy Run",
		activities: 12,
		totalMiles: 78.4,
		avgPace: "8:15",
		dateRange: "Nov 15 - Dec 30",
		description: "Aerobic base development runs",
		improvement: "+15% volume increase",
	},
	{
		id: "4",
		name: "Tempo Progression",
		type: "Tempo",
		activities: 5,
		totalMiles: 32.1,
		avgPace: "6:52",
		dateRange: "Dec 5 - Jan 15",
		description: "Progressive tempo runs at threshold pace",
		improvement: "+6% threshold improvement",
	},
]

export default function Sessions() {
	const handleSessionPress = (session: any) => {
		router.push({
			pathname: "/session-details",
			params: { id: session.id },
		})
	}

	const getTypeIcon = (type: string) => {
		switch (type) {
			case "Long Run":
				return <MapPin size={20} color="#8b5cf6" />
			case "Intervals":
				return <Target size={20} color="#ef4444" />
			case "Tempo":
				return <TrendingUp size={20} color="#f59e0b" />
			case "Easy Run":
				return <Calendar size={20} color="#10b981" />
			default:
				return <Target size={20} color="#8b5cf6" />
		}
	}

	const getTypeColor = (type: string) => {
		switch (type) {
			case "Long Run":
				return "#8b5cf6"
			case "Intervals":
				return "#ef4444"
			case "Tempo":
				return "#f59e0b"
			case "Easy Run":
				return "#10b981"
			default:
				return "#8b5cf6"
		}
	}

	return (
		<SafeAreaView style={styles.container} edges={["top"]}>
			<View style={styles.header}>
				<Text style={styles.title}>Training Sessions</Text>
				<Text style={styles.subtitle}>Grouped activities by training type</Text>
			</View>

			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				{mockSessions.map((session) => (
					<TouchableOpacity
						key={session.id}
						style={styles.sessionCard}
						onPress={() => handleSessionPress(session)}>
						<View style={styles.sessionHeader}>
							<View style={styles.sessionTitleRow}>
								<View style={styles.iconContainer}>{getTypeIcon(session.type)}</View>
								<View style={styles.sessionTitleInfo}>
									<Text style={styles.sessionName}>{session.name}</Text>
									<View
										style={[
											styles.typeBadge,
											{ backgroundColor: `${getTypeColor(session.type)}20` },
										]}>
										<Text style={[styles.typeBadgeText, { color: getTypeColor(session.type) }]}>
											{session.type}
										</Text>
									</View>
								</View>
							</View>
							<Text style={styles.improvement}>{session.improvement}</Text>
						</View>

						<Text style={styles.sessionDescription}>{session.description}</Text>
						<Text style={styles.dateRange}>{session.dateRange}</Text>

						<View style={styles.sessionStats}>
							<View style={styles.statItem}>
								<Text style={styles.statValue}>{session.activities}</Text>
								<Text style={styles.statLabel}>Activities</Text>
							</View>
							<View style={styles.summaryItem}>
								<Text style={styles.statValue}>{session.totalMiles}</Text>
								<Text style={styles.statLabel}>Total Miles</Text>
							</View>
							<View style={styles.summaryItem}>
								<Text style={styles.statValue}>{session.avgPace}</Text>
								<Text style={styles.statLabel}>Avg Pace</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}

				<View style={styles.summaryCard}>
					<Text style={styles.summaryTitle}>Session Overview</Text>
					<View style={styles.summaryStats}>
						<View style={styles.summaryItem}>
							<Text style={styles.summaryValue}>4</Text>
							<Text style={styles.summaryLabel}>Active Sessions</Text>
						</View>
						<View style={styles.summaryItem}>
							<Text style={styles.summaryValue}>31</Text>
							<Text style={styles.summaryLabel}>Total Activities</Text>
						</View>
						<View style={styles.summaryItem}>
							<Text style={styles.summaryValue}>249.3</Text>
							<Text style={styles.summaryLabel}>Total Miles</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
