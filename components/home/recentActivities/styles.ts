import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		padding: 20,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	activityItem: {
		paddingVertical: 12,
	},
	activityHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 12,
	},
	activityName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 4,
	},
	routeContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	route: {
		fontSize: 12,
		color: "#6b7280",
		marginLeft: 4,
	},
	typeBadge: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 8,
	},
	typeBadgeText: {
		fontSize: 11,
		fontWeight: "600",
	},
	activityStats: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	statItem: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	statValue: {
		fontSize: 14,
		fontWeight: "600",
		color: "#ffffff",
		marginLeft: 4,
	},
	statLabel: {
		fontSize: 12,
		color: "#9ca3af",
		marginLeft: 4,
	},
	separator: {
		height: 1,
		backgroundColor: "#2a2a2a",
		marginTop: 12,
	},
})
