import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0a0a0a",
	},
	stickyHeader: {
		backgroundColor: "#0a0a0a",
		paddingHorizontal: 20,
		paddingBottom: 8,
		zIndex: 10,
	},
	content: {
		flex: 1,
		paddingHorizontal: 15,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 0,
	},
	dayText: {
		fontSize: 24,
		fontWeight: "700",
		color: "#ffffff",
	},
	dateText: {
		fontSize: 16,
		color: "#9ca3af",
		marginTop: 4,
	},
	dropdown: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#1a1a1a",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	dropdownText: {
		color: "#ffffff",
		fontSize: 14,
		fontWeight: "500",
		marginRight: 8,
	},
	dropdownMenu: {
		position: "absolute",
		top: 50,
		right: 7,
		backgroundColor: "#1a1a1a",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#2a2a2a",
		zIndex: 1000,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
		minWidth: 140,
	},
	dropdownItem: {
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	dropdownItemText: {
		color: "#9ca3af",
		fontSize: 14,
		fontWeight: "500",
	},
	activeItem: {
		color: "#8b5cf6",
	},
	statsGrid: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 8,
		marginBottom: 20,
		gap: 12,
	},
	chartContainer: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		marginBottom: 15,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 16,
	},
	activitiesContainer: {
		marginBottom: 20,
	},
	quickStats: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		borderWidth: 1,
		borderColor: "#2a2a2a",
		marginBottom: 20,
	},
	quickStatsGrid: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	quickStatItem: {
		alignItems: "center",
	},
	quickStatValue: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
		marginTop: 8,
	},
	quickStatLabel: {
		fontSize: 12,
		color: "#9ca3af",
		marginTop: 4,
	},
})
