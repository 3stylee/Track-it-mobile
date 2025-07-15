import axios from "axios"
import { processData } from "./processData"

export const predictData = async (data: number[][], accessToken: string) => {
	const processedData = processData(data)
	const response = await axios.post(
		"https://activity-class-predictor-jnj8b.ondigitalocean.app/predict",
		processedData,
		{
			headers: {
				id: "32632334",
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
	return response.data
}
