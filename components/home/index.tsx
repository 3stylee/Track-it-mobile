import React, { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ChevronDown, MapPin } from "lucide-react-native"
import { WeeklyChart } from "./weeklyChart"
import { StatsCard } from "./statsCard"
import { RecentActivities } from "./recentActivities"
import { styles } from "./styles"

export default function Home() {
	const [viewMode, setViewMode] = useState<"week" | "month">("week")
	const [showDropdown, setShowDropdown] = useState(false)

	const today = new Date()
	const dayName = today.toLocaleDateString("en-UK", { weekday: "long" })
	const dateString = today.toLocaleDateString("en-UK", { month: "long", day: "numeric" })
	// Example data for weekly stats
	const weeklyStats = {
		totalMiles: 28.5,
		previousWeekChange: 15.2,
		averagePace: "7:42",
		paceChange: -3.1,
		totalRuns: 5,
		runsChange: 1,
	}

	return (
		<SafeAreaView style={styles.container} edges={['top']}>
			{/* Sticky Header */}
			<View style={styles.stickyHeader}>
				<View style={styles.header}>
					<View>
						<Text style={styles.dayText}>{dayName}</Text>
						<Text style={styles.dateText}>{dateString}</Text>
					</View>
					<TouchableOpacity style={styles.dropdown} onPress={() => setShowDropdown(!showDropdown)}>
						<Text style={styles.dropdownText}>{viewMode === "week" ? "This Week" : "This Month"}</Text>
						<ChevronDown size={16} color="#8b5cf6" />
					</TouchableOpacity>
				</View>

				{showDropdown && (
					<View style={styles.dropdownMenu}>
						<TouchableOpacity
							style={styles.dropdownItem}
							onPress={() => {
								setViewMode("week")
								setShowDropdown(false)
							}}>
							<Text style={[styles.dropdownItemText, viewMode === "week" && styles.activeItem]}>
								This Week
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.dropdownItem}
							onPress={() => {
								setViewMode("month")
								setShowDropdown(false)
							}}>
							<Text style={[styles.dropdownItemText, viewMode === "month" && styles.activeItem]}>
								This Month
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>

			{/* Scrollable Content */}
			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				{/* Stats Cards */}
				<View style={styles.statsGrid}>
					<StatsCard
						title="Total Miles"
						value={weeklyStats.totalMiles.toString()}
						change={weeklyStats.previousWeekChange}
						positive={weeklyStats.previousWeekChange > 0}
					/>
					<StatsCard
						title="Avg Pace"
						value={weeklyStats.averagePace}
						change={weeklyStats.paceChange}
						positive={weeklyStats.paceChange < 0}
						unit="/mi"
					/>
					<StatsCard
						title="Total Runs"
						value={weeklyStats.totalRuns.toString()}
						change={weeklyStats.runsChange}
						positive={weeklyStats.runsChange > 0}
					/>
				</View>

				{/* Mileage Chart */}
				<View style={styles.chartContainer}>
					<Text style={styles.sectionTitle}>Weekly Mileage</Text>
					<WeeklyChart />
				</View>

				{/* Recent Activities */}
				<View style={styles.activitiesContainer}>
					<Text style={styles.sectionTitle}>Recent Activities</Text>
					<RecentActivities />
				</View>

				{/* Quick Stats */}
				<View style={styles.quickStats}>
					<Text style={styles.sectionTitle}>This Week</Text>
					<View style={styles.quickStatsGrid}>
						<View style={styles.quickStatItem}>
							<MapPin size={16} color="#8b5cf6" />
							<Text style={styles.quickStatValue}>142</Text>
							<Text style={styles.quickStatLabel}>Elevation (ft)</Text>
						</View>
						<View style={styles.quickStatItem}>
							<Text style={styles.quickStatValue}>3:42:18</Text>
							<Text style={styles.quickStatLabel}>Total Time</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
