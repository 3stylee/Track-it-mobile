export type ProcessedActivity = {
	athlete: {
		id: number
	}
	title: string
	time: number
	distance: number
	polyline: string
	id: number
	start: string
	speed: number
	maxSpeed: number
	cadence: number
	type: string
	elevation: number
	predictedType: string
	heartrate: number
	load: number
}

export type AthleteActivities = ProcessedActivity[]

export interface Stat {
	text: string
	value: number | string
	unit: string
}
