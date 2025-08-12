import React, { useEffect, useState } from "react"
import { useRouter } from "expo-router"
import * as SecureStore from "expo-secure-store"
import LoadingScreen from "@/components/loadingScreen"

export default function Index() {
	const router = useRouter()
	const [isChecking, setIsChecking] = useState(true)

	useEffect(() => {
		checkAuthStatus()
	}, [])

	const checkAuthStatus = async () => {
		const userId = await SecureStore.getItemAsync("strava_user_id")
		if (!userId) {
			router.replace("/auth")
			setIsChecking(false)
			return
		}

		try {
			// get last_synced from database
			router.replace("/(tabs)")
		} catch (error) {
			console.error("Failed to fetch user status", error)
			router.replace("/auth")
		} finally {
			setIsChecking(false)
		}
	}

	if (isChecking) {
		return <LoadingScreen />
	}

	return null
}
