import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { authStyles } from "./styles"
import { router } from "expo-router"
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

const discovery = {
	authorizationEndpoint: "https://github.com/login/oauth/authorize",
	tokenEndpoint: "https://github.com/login/oauth/access_token",
	revocationEndpoint: "https://github.com/settings/connections/applications/<CLIENT_ID>",
}

export default function Index() {
	const handleStravaLogin = async () => {
		// TODO: Add your Strava OAuth logic here
		// Example:
		// try {
		//   await stravaAuthService.connect()
		//   router.replace('/(tabs)')
		// } catch (error) {
		//   alert(error.message)
		// } finally {
		//   setIsLoading(false)
		// }
	}

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

				<TouchableOpacity style={authStyles.stravaButton} onPress={handleStravaLogin}>
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
