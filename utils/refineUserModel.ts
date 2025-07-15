import axios from "axios"

import { ACTIVITY_LABEL_MAPPING } from "@/constants/activities"
import { scaleRow } from "./processData"

export const refineUserModel = async (data: any, newType: string, accessToken: string) => {
	const predictors = [data.distance, data.time, data.elevation, data.speed, data.maxSpeed, data.cadence]
	const scaledPredictors = scaleRow(predictors)
	const label = ACTIVITY_LABEL_MAPPING[newType as keyof typeof ACTIVITY_LABEL_MAPPING]
	const modelData = [...scaledPredictors, label]

	try {
		await axios.post("https://activity-class-predictor-jnj8b.ondigitalocean.app/refine", modelData, {
			headers: {
				id: "32632334",
				Authorization: `Bearer ${accessToken}`,
			},
		})
	} catch (error) {
		console.error("Error refining user model:", error)
	}
}
