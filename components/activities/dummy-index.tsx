import React, { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Search, Filter, MapPin, Clock, Zap } from "lucide-react-native"
import { ActivityCard } from "./activityCard"
import { router } from "expo-router"
import { styles } from "./styles"

const ACTIVITY_TYPES = ["All", "Easy Run", "Long Run", "Tempo", "Intervals", "Recovery"]

const mockActivities = [
	{
		id: "1",
		name: "Morning Long Run",
		distance: 12.5,
		duration: "1:32:45",
		pace: "7:25",
		type: "Long Run",
		date: "2024-01-20",
		elevation: 342,
		route: "Central Park Loop",
	},
	{
		id: "2",
		name: "Tempo Run",
		distance: 6.2,
		duration: "42:18",
		pace: "6:49",
		type: "Tempo",
		date: "2024-01-18",
		elevation: 156,
		route: "Riverside Drive",
	},
	{
		id: "3",
		name: "Easy Recovery",
		distance: 4.0,
		duration: "32:15",
		pace: "8:03",
		type: "Recovery",
		date: "2024-01-16",
		elevation: 89,
		route: "Park Avenue",
	},
	{
		id: "4",
		name: "Track Intervals",
		distance: 7.5,
		duration: "35:22",
		pace: "4:43",
		type: "Intervals",
		date: "2024-01-14",
		elevation: 12,
		route: "Local Track",
	},
]

export default function Activities() {
	const [selectedType, setSelectedType] = useState("All")
	const [searchQuery, setSearchQuery] = useState("")
	const [showFilters, setShowFilters] = useState(false)

	const filteredActivities = mockActivities.filter((activity) => {
		const matchesType = selectedType === "All" || activity.type === selectedType
		const matchesSearch =
			activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			activity.route.toLowerCase().includes(searchQuery.toLowerCase())
		return matchesType && matchesSearch
	})

	const handleActivityPress = (activity: any) => {
		router.push({ pathname: "/[id]", params: { id: String(activity.id), from: "Activities" } })
	}

	return (
		<SafeAreaView style={styles.container} edges={["top"]}>
			<View style={styles.header}>
				<Text style={styles.title}>Activities</Text>
				<TouchableOpacity style={styles.filterButton} onPress={() => setShowFilters(!showFilters)}>
					<Filter size={20} color="#8b5cf6" />
				</TouchableOpacity>
			</View>

			{/* Search Bar */}
			<View style={styles.searchContainer}>
				<Search size={20} color="#6b7280" />
				<TextInput
					style={styles.searchInput}
					placeholder="Search activities..."
					placeholderTextColor="#6b7280"
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>
			</View>

			{/* Filter Chips */}
			{showFilters && (
				<ScrollView horizontal style={styles.filterChips} showsHorizontalScrollIndicator={false}>
					{ACTIVITY_TYPES.map((type) => (
						<TouchableOpacity
							key={type}
							style={[styles.filterChip, selectedType === type && styles.activeFilterChip]}
							onPress={() => setSelectedType(type)}>
							<Text style={[styles.filterChipText, selectedType === type && styles.activeFilterChipText]}>
								{type}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			)}

			{/* Activities List */}
			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				{filteredActivities.map((activity) => (
					<TouchableOpacity key={activity.id} onPress={() => handleActivityPress(activity)}>
						<ActivityCard activity={activity} />
					</TouchableOpacity>
				))}
				{filteredActivities.length === 0 && (
					<View style={styles.emptyState}>
						<Text style={styles.emptyText}>No activities found</Text>
						<Text style={styles.emptySubtext}>Try adjusting your filters or search query</Text>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}
