import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ChevronLeft, ChevronRight } from "lucide-react-native"

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const mockActivityData: Record<string, { count: number; miles: number }> = {
	"2025-08-01": { count: 1, miles: 5.2 },
	"2025-08-03": { count: 1, miles: 8.5 },
	"2025-08-05": { count: 2, miles: 12.3 },
	"2025-08-08": { count: 1, miles: 6.7 },
	"2025-08-10": { count: 1, miles: 10.4 },
	"2025-08-12": { count: 1, miles: 4.8 },
	"2025-08-14": { count: 1, miles: 7.5 },
	"2025-08-16": { count: 1, miles: 4.0 },
	"2025-08-18": { count: 1, miles: 6.2 },
	"2025-08-20": { count: 1, miles: 12.5 },
}

export default function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [selectedDate, setSelectedDate] = useState<string | null>(null)

	const year = currentDate.getFullYear()
	const month = currentDate.getMonth()
	const today = new Date()

	const firstDayOfMonth = new Date(year, month, 1)
	const lastDayOfMonth = new Date(year, month + 1, 0)
	const startingDayOfWeek = firstDayOfMonth.getDay()
	const daysInMonth = lastDayOfMonth.getDate()

	const monthlyTotal = Object.entries(mockActivityData)
		.filter(([date]) => date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
		.reduce((total, [_, data]) => total + data.miles, 0)

	const goToPreviousMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1))
	}

	const goToNextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1))
	}

	const formatDateKey = (day: number) => {
		return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
	}

	const renderCalendarDay = (day: number) => {
		const dateKey = formatDateKey(day)
		const activityData = mockActivityData[dateKey]
		const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year
		const isSelected = selectedDate === dateKey

		return (
			<TouchableOpacity
				key={day}
				style={[styles.calendarDay, isToday && styles.today, isSelected && styles.selectedDay]}
				onPress={() => setSelectedDate(isSelected ? null : dateKey)}>
				<Text style={[styles.dayNumber, isToday && styles.todayText, isSelected && styles.selectedDayText]}>
					{day}
				</Text>
				{activityData && (
					<View style={styles.activityIndicators}>
						{Array.from({ length: Math.min(activityData.count, 3) }).map((_, i) => (
							<View key={i} style={styles.activityDot} />
						))}
					</View>
				)}
			</TouchableOpacity>
		)
	}

	const renderEmptyDay = (key: string) => <View key={key} style={styles.emptyDay} />

	const getSelectedDateActivities = () => {
		if (!selectedDate || !mockActivityData[selectedDate]) return null
		return mockActivityData[selectedDate]
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={goToPreviousMonth} style={styles.navButton}>
					<ChevronLeft size={24} color="#8b5cf6" />
				</TouchableOpacity>
				<View style={styles.monthInfo}>
					<Text style={styles.monthYear}>
						{MONTHS[month]} {year}
					</Text>
					<Text style={styles.monthlyTotal}>{monthlyTotal.toFixed(1)} miles</Text>
				</View>
				<TouchableOpacity onPress={goToNextMonth} style={styles.navButton}>
					<ChevronRight size={24} color="#8b5cf6" />
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				{/* Days of Week Header */}
				<View style={styles.daysHeader}>
					{DAYS.map((day) => (
						<Text key={day} style={styles.dayHeader}>
							{day}
						</Text>
					))}
				</View>

				{/* Calendar Grid */}
				<View style={styles.calendarGrid}>
					{/* Empty days for the start of the month */}
					{Array.from({ length: startingDayOfWeek }).map((_, i) => renderEmptyDay(`empty-start-${i}`))}

					{/* Days of the month */}
					{Array.from({ length: daysInMonth }).map((_, i) => renderCalendarDay(i + 1))}
				</View>

				{/* Selected Date Details */}
				{selectedDate && getSelectedDateActivities() && (
					<View style={styles.selectedDateDetails}>
						<Text style={styles.selectedDateTitle}>
							{new Date(selectedDate).toLocaleDateString("en-US", {
								weekday: "long",
								month: "long",
								day: "numeric",
							})}
						</Text>
						<View style={styles.activitySummary}>
							<View style={styles.summaryItem}>
								<Text style={styles.summaryValue}>{getSelectedDateActivities()?.count}</Text>
								<Text style={styles.summaryLabel}>Activities</Text>
							</View>
							<View style={styles.summaryItem}>
								<Text style={styles.summaryValue}>{getSelectedDateActivities()?.miles.toFixed(1)}</Text>
								<Text style={styles.summaryLabel}>Miles</Text>
							</View>
						</View>
					</View>
				)}

				{/* Monthly Stats */}
				<View style={styles.monthlyStats}>
					<Text style={styles.statsTitle}>Monthly Summary</Text>
					<View style={styles.statsGrid}>
						<View style={styles.statItem}>
							<Text style={styles.statValue}>
								{
									Object.values(mockActivityData).filter((_, i) =>
										Object.keys(mockActivityData)[i].startsWith(
											`${year}-${String(month + 1).padStart(2, "0")}`
										)
									).length
								}
							</Text>
							<Text style={styles.statLabel}>Total Runs</Text>
						</View>
						<View style={styles.statItem}>
							<Text style={styles.statValue}>{monthlyTotal.toFixed(1)}</Text>
							<Text style={styles.statLabel}>Total Miles</Text>
						</View>
						<View style={styles.statItem}>
							<Text style={styles.statValue}>
								{monthlyTotal > 0
									? (
											monthlyTotal /
											Object.values(mockActivityData).filter((_, i) =>
												Object.keys(mockActivityData)[i].startsWith(
													`${year}-${String(month + 1).padStart(2, "0")}`
												)
											).length
									  ).toFixed(1)
									: "0.0"}
							</Text>
							<Text style={styles.statLabel}>Avg Miles</Text>
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
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	navButton: {
		padding: 8,
		backgroundColor: "#1a1a1a",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	monthInfo: {
		alignItems: "center",
	},
	monthYear: {
		fontSize: 24,
		fontWeight: "700",
		color: "#ffffff",
	},
	monthlyTotal: {
		fontSize: 14,
		color: "#8b5cf6",
		marginTop: 4,
		fontWeight: "500",
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
	daysHeader: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 12,
		paddingVertical: 8,
	},
	dayHeader: {
		fontSize: 14,
		fontWeight: "600",
		color: "#6b7280",
		textAlign: "center",
		width: 40,
	},
	calendarGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	calendarDay: {
		width: 40,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 8,
		borderRadius: 8,
		position: "relative",
	},
	emptyDay: {
		width: 40,
		height: 50,
		marginBottom: 8,
	},
	today: {
		backgroundColor: "#8b5cf6",
	},
	selectedDay: {
		backgroundColor: "#2a2a2a",
		borderWidth: 2,
		borderColor: "#8b5cf6",
	},
	dayNumber: {
		fontSize: 16,
		color: "#ffffff",
		fontWeight: "500",
	},
	todayText: {
		color: "#ffffff",
		fontWeight: "700",
	},
	selectedDayText: {
		color: "#8b5cf6",
		fontWeight: "600",
	},
	activityIndicators: {
		flexDirection: "row",
		position: "absolute",
		bottom: 4,
	},
	activityDot: {
		width: 4,
		height: 4,
		backgroundColor: "#10b981",
		borderRadius: 2,
		marginHorizontal: 1,
	},
	selectedDateDetails: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		marginTop: 24,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	selectedDateTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 16,
		textAlign: "center",
	},
	activitySummary: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	summaryItem: {
		alignItems: "center",
	},
	summaryValue: {
		fontSize: 24,
		fontWeight: "700",
		color: "#8b5cf6",
	},
	summaryLabel: {
		fontSize: 14,
		color: "#9ca3af",
		marginTop: 4,
	},
	monthlyStats: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		marginTop: 24,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	statsTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 16,
		textAlign: "center",
	},
	statsGrid: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	statItem: {
		alignItems: "center",
	},
	statValue: {
		fontSize: 20,
		fontWeight: "700",
		color: "#ffffff",
	},
	statLabel: {
		fontSize: 12,
		color: "#9ca3af",
		marginTop: 4,
	},
})
