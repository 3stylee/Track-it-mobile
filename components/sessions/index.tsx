import React from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Target, TrendingUp, Calendar, MapPin } from "lucide-react-native"
import { router } from "expo-router"

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0a0a0a",
	},
	header: {
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	title: {
		fontSize: 28,
		fontWeight: "700",
		color: "#ffffff",
	},
	subtitle: {
		fontSize: 16,
		color: "#9ca3af",
		marginTop: 4,
	},
	content: {
		flex: 1,
		paddingHorizontal: 15,
	},
	sessionCard: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	sessionHeader: {
		marginBottom: 12,
	},
	sessionTitleRow: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginBottom: 8,
	},
	iconContainer: {
		width: 40,
		height: 40,
		backgroundColor: "#2a2a2a",
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 12,
	},
	sessionTitleInfo: {
		flex: 1,
	},
	sessionName: {
		fontSize: 18,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 6,
	},
	typeBadge: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 12,
		alignSelf: "flex-start",
	},
	typeBadgeText: {
		fontSize: 12,
		fontWeight: "600",
	},
	improvement: {
		fontSize: 14,
		color: "#10b981",
		fontWeight: "500",
	},
	sessionDescription: {
		fontSize: 14,
		color: "#9ca3af",
		marginBottom: 8,
		lineHeight: 20,
	},
	dateRange: {
		fontSize: 12,
		color: "#6b7280",
		marginBottom: 16,
	},
	sessionStats: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	statItem: {
		alignItems: "center",
	},
	statValue: {
		fontSize: 16,
		fontWeight: "700",
		color: "#ffffff",
	},
	statLabel: {
		fontSize: 12,
		color: "#9ca3af",
		marginTop: 4,
	},
	summaryCard: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	summaryTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 16,
		textAlign: "center",
	},
	summaryStats: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	summaryItem: {
		alignItems: "center",
	},
	summaryValue: {
		fontSize: 20,
		fontWeight: "700",
		color: "#8b5cf6",
	},
	summaryLabel: {
		fontSize: 12,
		color: "#9ca3af",
		marginTop: 4,
	},
})
