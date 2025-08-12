import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	card: {
		backgroundColor: "#1a1a1a",
		borderRadius: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: "#2a2a2a",
		overflow: "hidden",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		padding: 16,
		paddingBottom: 12,
	},
	titleContainer: {
		flex: 1,
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
	routeImageContainer: {
		height: 120,
		position: "relative",
	},
	routeImage: {
		width: "100%",
		height: "100%",
	},
	imageOverlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	statsContainer: {
		padding: 16,
	},
	mainStats: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
	},
	statItem: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	statValue: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ffffff",
		marginLeft: 4,
	},
	statLabel: {
		fontSize: 12,
		color: "#9ca3af",
		marginLeft: 2,
	},
	secondaryStats: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	elevationValue: {
		fontSize: 12,
		color: "#8b5cf6",
		marginLeft: 4,
		fontWeight: "500",
	},
	dateText: {
		fontSize: 12,
		color: "#6b7280",
		fontWeight: "500",
	},
})
