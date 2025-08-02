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
		return apiResponse.ok
	} catch (error) {
		return false
	}
}
