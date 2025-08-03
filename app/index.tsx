import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { useRouter } from "expo-router"
import * as SecureStore from "expo-secure-store"
import LottieView from "lottie-react-native"

export default function Index() {
	const router = useRouter()
	const [isChecking, setIsChecking] = useState(true)

	useEffect(() => {
		checkAuthStatus()
	}, [])

	const checkAuthStatus = async () => {
		const accessToken = await SecureStore.getItemAsync("strava_access_token")
		const expiresAt = await SecureStore.getItemAsync("strava_expires_at")

		if (accessToken && expiresAt) {
			const expiryTime = parseInt(expiresAt) * 1000
			const currentTime = Date.now()

			if (currentTime < expiryTime) {
				router.replace("/(tabs)")
			} else {
				router.replace("/auth")
			}
		} else {
			router.replace("/auth")
		}

		setIsChecking(false)
	}

	if (isChecking) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#23272f",
				}}>
				<LottieView
					source={require("../assets/animations/loading.json")}
					autoPlay
					loop
					style={{ width: 100, height: 100 }}
				/>
				<Text
					style={{
						color: "#fff",
						marginTop: 20,
						fontSize: 16,
					}}>
					Loading...
				</Text>
			</View>
		)
	}

	return null
}
