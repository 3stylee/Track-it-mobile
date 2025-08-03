/**
 * Constructs the URL for the Google Static Images API to get a static map image with a line representing a route.
 *
 * @param {string} coordinatesString - A string of coordinates for the route.
 *
 * @returns {string} The URL endpoint for the Google Static Images API.
 */
export const getMapUrl = (polyline: string) => {
	const polylineStr = encodeURIComponent(polyline)
	return `https://maps.googleapis.com/maps/api/staticmap?size=450x300&maptype=roadmap&path=enc:${polylineStr}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
}
