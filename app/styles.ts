import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export const authStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImage: {
		position: "absolute",
		top: 0,
		left: 0,
		width: width,
		height: height,
	},
	card: {
		backgroundColor: "#23272f",
		borderRadius: 16,
		padding: 24,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		opacity: 0.95,
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 8,
		width: width - 40,
		maxWidth: 400,
	},
	logo: {
		width: "100%",
		height: 179,
		marginBottom: 24,
		borderRadius: 12,
		backgroundColor: "transparent",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 12,
		textAlign: "center",
	},
	subtitle: {
		fontSize: 16,
		color: "#b0b6c3",
		textAlign: "center",
		marginBottom: 32,
		lineHeight: 22,
	},
	stravaButton: {
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	stravaButtonImage: {
		width: "100%",
		height: 55,
	},
})
