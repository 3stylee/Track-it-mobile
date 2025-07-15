export const CLIENT_ID = "115309"
export const USER_ID = "32632334" // Hardcoded user ID for demo, would have actual athentication given more time
export const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN
export const PAGE_SIZE = 72
export const ACTIVITY_LABEL_MAPPING = {
	Easy: 0,
	"Long Run": 1,
	Race: 2,
	Session: 3,
	Tempo: 4,
}
export const MODEL_SCALER_INFO = {
	data_min: [0.0, 24.0, 0.0, 0.612, 2.9, 0.0],
	data_max: [18347.5, 4900.0, 436.0, 8.948, 12.0, 116.0],
}
export const AUTH_TOKEN_BASE_URL = "https://www.strava.com/api/v3/oauth/token"
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
export const FIREBASE_COLLECTIONS = {
	ACTIVITIES: "activities",
	USERS: "users",
}
