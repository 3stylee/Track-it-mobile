import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
