import { State } from "@/models/state"

export const InitialState = {
	userData: {
		stravaAccess: false,
		firstActivityDate: "2009-07-01T00:00:00.000Z", // Date Strava was launched
		dateOfLastBackup: undefined,
		access_token: "",
		refresh_token: "",
		expires_at: Infinity,
		email: "",
		sex: "",
		zones: [],
	},
	loadMore: {
		loadingMore: false,
		hasMore: true,
		page: 0,
	},
	athleteActivities: null,
} as State
