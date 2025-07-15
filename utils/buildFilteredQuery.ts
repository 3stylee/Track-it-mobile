import { collection, orderBy, query, where, limit, startAfter } from "firebase/firestore"
import { FIREBASE_COLLECTIONS, PAGE_SIZE } from "@/constants/activities"
import { db } from "@/firebase"

export const buildFilteredQuery = (
	uId: string,
	getState: any,
	page: number,
	dateBefore?: number,
	dateAfter?: number
) => {
	let q = query(
		collection(db, FIREBASE_COLLECTIONS.ACTIVITIES),
		where("userId", "==", uId),
		orderBy("start", "desc"),
		limit(PAGE_SIZE)
	)

	if (dateAfter) {
		const after = new Date(dateAfter * 1000).toISOString()
		q = query(q, where("start", ">=", after))
	}

	if (dateBefore) {
		const before = new Date(dateBefore * 1000).toISOString()
		q = query(q, where("start", "<=", before))
	}

	const { athleteActivities } = getState()

	if (athleteActivities && page > 0) {
		const lastVisibleDoc = athleteActivities[athleteActivities.length - 1]
		q = query(q, startAfter(lastVisibleDoc.start))
	}

	return q
}
