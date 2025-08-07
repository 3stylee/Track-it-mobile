import { View, Text } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"

export default function LoadingScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<LottieView
				source={require("@/assets/animations/olympics.json")}
				autoPlay
				loop
				style={{ width: 50, height: 50 }}
			/>
			<Text style={{ marginTop: 10 }}>Loading activities...</Text>
		</View>
	)
}
