import { MODEL_SCALER_INFO } from "@/constants/activities"

/**
 * Processes an array of predictors and scales them into normalised predictors.
 *
 * @param {Array}data - the raw predictors to process.
 *
 * @returns {Array} the normalised predictors.
 */
export const processData = (data: number[][]) => {
	const processedData = data.map((row: any) => {
		const weights = scaleRow([
			row.distance,
			row.moving_time,
			row.total_elevation_gain,
			row.average_speed,
			row.max_speed,
			row.average_cadence,
		])
		return [...weights, row.type]
	})
	return processedData
}

/**
 * Processes an array of raw predictors and scales them into normalised predictors.
 *
 * @param {Array}row - the raw predictors to process.
 *
 * @returns {Array} the normalised predictors.
 */
export const scaleRow = (row: number[]) => {
	const scaledRow = row.map((value: number, index: number) => {
		const dataMin = MODEL_SCALER_INFO.data_min[index]
		const dataMax = MODEL_SCALER_INFO.data_max[index]
		const range = dataMax - dataMin

		// Apply Min-Max scaling
		const scaledValue = (value - dataMin) / range
		return scaledValue
	})
	return scaledRow
}
