import React, { useCallback, useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, Alert } from "react-native"
import { authStyles } from "./styles"
import * as WebBrowser from "expo-web-browser"
import { makeRedirectUri, useAuthRequest } from "expo-auth-session"
import { CLIENT_ID } from "@/constants/activities"
import { useRouter } from "expo-router"
import { exchangeStravaToken } from "@/utils/exchangeStravaToken"
import LottieView from "lottie-react-native"

WebBrowser.maybeCompleteAuthSession()

const STRAVA_CONFIG = {
	authorizationEndpoint: "https://www.strava.com/oauth/mobile/authorize",
	tokenEndpoint: "https://www.strava.com/oauth/token",
	revocationEndpoint: "https://www.strava.com/oauth/deauthorize",
}

export default function Index() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const [request, response, promtAsync] = useAuthRequest(
		{
			clientId: CLIENT_ID,
			scopes: ["activity:read_all,activity:write"],
			redirectUri: makeRedirectUri({
				scheme: "trackit",
				preferLocalhost: true,
				path: "oauth",
			}),
		},
		STRAVA_CONFIG
	)

	useEffect(() => {
		if (response?.type === "success") {
			const { code, scope } = response.params
			if (scope && scope.includes("activity:read_all") && scope.includes("activity:write")) {
				handleTokenExchange(code)
			} else {
				Alert.alert("Required Strava permissions not granted. Please try again.")
			}
		} else if (response?.type === "error") {
			Alert.alert("Authentication failed. Please try again.")
		}
	}, [response])

	const handleTokenExchange = async (code: string) => {
		setIsLoading(true)
		try {
			const success = await exchangeStravaToken(code)
			if (success) {
				router.replace("/(tabs)")
			} else {
				setIsLoading(false)
				Alert.alert("Failed to exchange code for tokens. Please try again.")
			}
		} catch (error) {
			setIsLoading(false)
			Alert.alert("Network error. Please try again.")
		}
	}

	const onPressStravaAuth = useCallback(async () => {
		if (request) {
			await promtAsync()
		}
	}, [request, promtAsync])

	return (
		<View style={authStyles.container}>
			<Image
				source={require("@/assets/images/signUpBackground.png")}
				style={authStyles.backgroundImage}
				resizeMode="cover"
			/>
			<View style={authStyles.card}>
				<Image
					source={require("@/assets/images/strava-logo-2016.png")}
					style={authStyles.logo}
					resizeMode="contain"
				/>
				<Text style={authStyles.title}>Track It</Text>
				<Text style={authStyles.subtitle}>Connect with Strava to start tracking your activities</Text>

				<TouchableOpacity
					style={[authStyles.stravaButton, isLoading && { opacity: 0.5 }]}
					onPress={isLoading ? undefined : onPressStravaAuth}>
					<Image
						source={require("@/assets/images/login_button.png")}
						style={authStyles.stravaButtonImage}
						resizeMode="contain"
					/>
					{isLoading && (
						<LottieView
							source={require("@/assets/animations/olympics.json")}
							autoPlay
							loop
							style={{ position: "absolute", width: 40, height: 40, opacity: 1 }}
						/>
					)}
				</TouchableOpacity>
			</View>
		</View>
	)
}
