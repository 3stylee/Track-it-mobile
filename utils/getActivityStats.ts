import { Stat } from "@/models/activities"
import { getMinsFromSeconds } from "./getMinsFromSeconds"
import { getPaceFromSpeed } from "./getPaceFromSpeed"

/**
 * Creates an array of Stat objects to be used by the LabelledStats component to display the statistics of an activity.
 *
 * @param {number} distance - The distance of the activity in meters.
 * @param {number} speed - The speed of the activity in meters per second.
 * @param {number} time - The duration of the activity in seconds.
 *
 * @returns {Stat[]} An array of Stat objects, each containing a text label and the corresponding value and unit for a specific statistic (Distance, Pace, Time).
 */
export const getActivityStats = (distance: number, speed: number, time: number) => {
	const stats: Stat[] = [
		{
			text: "Distance",
			value: (distance / 1000).toFixed(2),
			unit: "Km",
		},
		{
			text: "Pace",
			value: getPaceFromSpeed(speed),
			unit: "/Km",
		},
		{
			text: "Time",
			value: getMinsFromSeconds(time),
			unit: "",
		},
	]
	return stats
}
