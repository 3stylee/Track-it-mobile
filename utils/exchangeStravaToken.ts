import * as SecureStore from "expo-secure-store"

export async function exchangeStravaToken(code: string): Promise<boolean> {
	try {
		const apiResponse = await fetch(
			"https://da5r1u6xy4.execute-api.eu-north-1.amazonaws.com/dev/auth/exchangeToken",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ code }),
			}
		)

		if (!apiResponse.ok) {
			return false
		}

		const responseData = await apiResponse.json()
		const { userId, access_token, refresh_token, expires_at } = responseData

		// Store tokens in secure storage
		await SecureStore.setItemAsync("strava_user_id", userId.toString())
		await SecureStore.setItemAsync("strava_access_token", access_token)
		await SecureStore.setItemAsync("strava_refresh_token", refresh_token)
		await SecureStore.setItemAsync("strava_expires_at", expires_at.toString())

		return true
	} catch (error) {
		console.error("Token exchange error:", error)
		return false
	}
}
