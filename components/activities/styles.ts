import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
	title: {
		fontSize: 28,
		fontWeight: "700",
		color: "#ffffff",
	},
	filterButton: {
		padding: 8,
		backgroundColor: "#1a1a1a",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#1a1a1a",
		marginHorizontal: 20,
		marginBottom: 16,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	searchInput: {
		flex: 1,
		marginLeft: 12,
		fontSize: 16,
		color: "#ffffff",
	},
	filterChips: {
		paddingHorizontal: 20,
		marginBottom: 16,
	},
	filterChip: {
		backgroundColor: "#1a1a1a",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
		marginRight: 8,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	activeFilterChip: {
		backgroundColor: "#8b5cf6",
		borderColor: "#8b5cf6",
	},
	filterChipText: {
		color: "#9ca3af",
		fontSize: 14,
		fontWeight: "500",
	},
	activeFilterChipText: {
		color: "#ffffff",
	},
	content: {
		flex: 1,
		paddingHorizontal: 15,
	},
	emptyState: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 60,
	},
	emptyText: {
		fontSize: 18,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 8,
	},
	emptySubtext: {
		fontSize: 14,
		color: "#6b7280",
		textAlign: "center",
	},
})
