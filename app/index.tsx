import React, { useCallback } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { authStyles } from "./styles"
import * as WebBrowser from "expo-web-browser"
import { makeRedirectUri, useAuthRequest } from "expo-auth-session"
import { CLIENT_ID } from "@/constants/activities"
import { useRouter } from "expo-router"
import { exchangeStravaToken } from "@/utils/exchangeStravaToken"

WebBrowser.maybeCompleteAuthSession()

const STRAVA_CONFIG = {
	authorizationEndpoint: "https://www.strava.com/oauth/mobile/authorize",
	tokenEndpoint: "https://www.strava.com/oauth/token",
	revocationEndpoint: "https://www.strava.com/oauth/deauthorize",
}

export default function Index() {
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

	const router = useRouter()

	const onPressStravaAuth = useCallback(async () => {
		if (request) {
			await promtAsync()
			if (response?.type === "success") {
				const { code, scope } = response.params
				if (scope && scope.includes("activity:read_all") && scope.includes("activity:write")) {
					const success = await exchangeStravaToken(code)
					if (success) {
						router.replace("/(tabs)")
					} else {
						alert("Failed to exchange code for tokens. Please try again.")
					}
				} else {
					console.error("Required Strava permissions not granted. Please try again.")
				}
			}
		}
	}, [request, response, promtAsync, router])

	return (
		<View style={authStyles.container}>
			<Image
				source={require("../assets/images/signUpBackground.png")}
				style={authStyles.backgroundImage}
				resizeMode="cover"
			/>
			<View style={authStyles.card}>
				<Image
					source={require("../assets/images/strava-logo-2016.png")}
					style={authStyles.logo}
					resizeMode="contain"
				/>
				<Text style={authStyles.title}>Track It</Text>
				<Text style={authStyles.subtitle}>Connect with Strava to start tracking your activities</Text>

				<TouchableOpacity style={authStyles.stravaButton} onPress={onPressStravaAuth}>
					<Image
						source={require("../assets/images/login_button.png")}
						style={authStyles.stravaButtonImage}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}
