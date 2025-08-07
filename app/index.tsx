import React, { useEffect, useState } from "react"
import { useRouter } from "expo-router"
import * as SecureStore from "expo-secure-store"
import { exchangeStravaToken } from "@/utils/exchangeStravaToken"
import LoadingScreen from "@/components/loadingScreen"

export default function Index() {
	const router = useRouter()
	const [isChecking, setIsChecking] = useState(true)

	useEffect(() => {
		checkAuthStatus()
	}, [])

	const refreshToken = async () => {
		const code = await SecureStore.getItemAsync("strava_refresh_token")
		if (!code) {
			router.replace("/auth")
			return
		}
		try {
			const success = await exchangeStravaToken(code, true)
			if (success) {
				router.replace("/(tabs)")
			} else {
				router.replace("/auth")
			}
		} catch (error) {
			router.replace("/auth")
		}
	}

	const checkAuthStatus = async () => {
		const accessToken = await SecureStore.getItemAsync("strava_access_token")
		const expiresAt = await SecureStore.getItemAsync("strava_expires_at")

		if (accessToken && expiresAt) {
			const expiryTime = parseInt(expiresAt) * 1000
			const currentTime = Date.now()

			if (currentTime < expiryTime) {
				router.replace("/(tabs)")
			} else {
				await refreshToken()
			}
		} else {
			router.replace("/auth")
		}

		setIsChecking(false)
	}

	if (isChecking) {
		return <LoadingScreen />
	}

	return null
}
