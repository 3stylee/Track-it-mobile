import { API_BASE_URL } from "@/constants/activities"

/**
 * Constructs the endpoint URL for fetching activities from the API.
 *
 * @param {number} [dateAfter] - An optional Unix timestamp representing the date after which activities should be fetched.
 * @param {number} [limit] - An optional limit on the number of activities to fetch.
 *
 * @returns {string} The endpoint URL to be called.
 */
export const getEndpoint = (limit?: number, dateAfter?: number) => {
	let endpoint = API_BASE_URL
	endpoint += "/athlete/activities"
	// The API limits the response data to 30 activities by default, and when passed as a parameter
	// it maxes out at 200. In the edge case a user has more than 200 activities in a month, they will not see all of them
	endpoint += `?per_page=${limit ? limit : 200}`

	if (dateAfter) {
		endpoint += `&after=${dateAfter}`
	}

	return endpoint
}
