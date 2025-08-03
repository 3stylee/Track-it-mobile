import { StyleSheet } from "react-native"
import { Colors } from "@/constants/Colors"

export const settingsStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.background,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#E5E5E5",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.light.text,
	},
	closeButton: {
		padding: 5,
	},
	content: {
		flex: 1,
		padding: 20,
	},
	settingItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#E5E5E5",
	},
	settingText: {
		flex: 1,
		fontSize: 16,
		marginLeft: 15,
		color: Colors.light.text,
	},
	logoutItem: {
		marginTop: 20,
		borderTopWidth: 2,
		borderTopColor: "#ff4444",
		borderBottomWidth: 0,
	},
	logoutText: {
		color: "#ff4444",
		fontWeight: "bold",
	},
})
