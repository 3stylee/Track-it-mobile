import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	card: {
		backgroundColor: "#1a1a1a",
		borderRadius: 12,
		padding: 16,
		flex: 1,
		borderWidth: 1,
		borderColor: "#2a2a2a",
	},
	title: {
		fontSize: 12,
		color: "#9ca3af",
		marginBottom: 8,
		fontWeight: "500",
	},
	valueContainer: {
		flexDirection: "row",
		alignItems: "baseline",
		marginBottom: 8,
	},
	value: {
		fontSize: 20,
		fontWeight: "700",
		color: "#ffffff",
	},
	unit: {
		fontSize: 12,
		color: "#9ca3af",
		marginLeft: 2,
	},
	changeContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	changeText: {
		fontSize: 12,
		fontWeight: "500",
		marginLeft: 4,
	},
})
