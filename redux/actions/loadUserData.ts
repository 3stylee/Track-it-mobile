import { FIREBASE_COLLECTIONS, USER_ID } from "@/constants/activities"
import { db } from "@/firebase"
import { doc, getDoc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { InitialState } from "../initialState"

export const loadUserData = createAsyncThunk("userData/loadUserData", async () => {
	try {
		const uId = USER_ID
		const docRef = doc(db, FIREBASE_COLLECTIONS.USERS, uId)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			return docSnap.data()
		} else {
			const initialData = {
				...InitialState.userData,
				stravaAccess: false,
			}
			return initialData
		}
	} catch (error: any) {
		throw new Error("Failed to load user data")
	}
})
