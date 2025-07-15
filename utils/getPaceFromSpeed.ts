import { getMinsFromSeconds } from "./getMinsFromSeconds"

/**
 * Calculates the pace (mins per kilometer/mile) from a speed in meters per second.
 *
 * @param {number} speed - The speed in meters per second.
 *
 * @returns {string} A string representing the pace in the format "mm:ss" per kilometer/mile. If the speed is 0, it returns "--:--".
 */
export const getPaceFromSpeed = (speed: number) => {
	const paceSecondsPerKm = 1000 / speed
	if (paceSecondsPerKm === Infinity) return "--:--" // Prevents division by zero
	return getMinsFromSeconds(paceSecondsPerKm)
}
