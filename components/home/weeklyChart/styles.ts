import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		height: 200,
	},
	chart: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
		paddingHorizontal: 8,
	},
	barContainer: {
		alignItems: "center",
		flex: 1,
	},
	barWrapper: {
		height: 120,
		width: 24,
		justifyContent: "flex-end",
		marginBottom: 8,
	},
	bar: {
		width: "100%",
		borderRadius: 4,
		minHeight: 4,
	},
	dayLabel: {
		fontSize: 12,
		color: "#9ca3af",
		fontWeight: "500",
		marginBottom: 4,
	},
	todayLabel: {
		color: "#8b5cf6",
		fontWeight: "600",
	},
	milesLabel: {
		fontSize: 11,
		color: "#6b7280",
	},
})
