import { StyleSheet, Dimensions } from "react-native"
import { Colors } from "@/constants/Colors"
const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		overflow: "visible",
		backgroundColor: Colors.light.background,
		shadowColor: Colors.light.primary,
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 10,
		marginVertical: 5,
		marginHorizontal: 10,
	},
	image: {
		width: screenWidth - 20,
		height: ((screenWidth - 20) * 2) / 3, // 3:2 aspect ratio
		alignSelf: "center",
		borderRadius: 8,
	},
	content: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		paddingVertical: 10,
		paddingHorizontal: 16,
		textAlign: "center",
		color: Colors.light.primary,
	},
	description: {
		fontSize: 14,
		color: Colors.light.icon,
	},
	statsRow: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 10,
	},
	statItem: {
		alignItems: "center",
		flex: 1,
	},
	statLabel: {
		fontSize: 12,
		color: Colors.light.icon,
		marginTop: 2,
	},
	statValue: {
		fontSize: 16,
		fontWeight: "bold",
		color: Colors.light.primary,
	},
	statUnit: {
		fontSize: 12,
		color: Colors.light.icon,
	},
})
