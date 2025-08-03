import { View, Text } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"

interface LoadingFooterProps {
	isLoading: boolean
}

export default function LoadingFooter({ isLoading }: LoadingFooterProps) {
	if (!isLoading) return null

	return (
		<View style={{ padding: 20, alignItems: "center" }}>
			<LottieView
				source={require("@/assets/animations/olympics.json")}
				autoPlay
				loop
				style={{ width: 40, height: 40 }}
			/>
			<Text style={{ marginTop: 10 }}>Loading more activities...</Text>
		</View>
	)
}
