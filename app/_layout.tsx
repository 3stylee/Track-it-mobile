import { rootReducer } from "@/redux/reducers/rootReducer"
import { configureStore } from "@reduxjs/toolkit"
import { Stack } from "expo-router"
import { Provider } from "react-redux"

const store = configureStore({ reducer: rootReducer })
export type AppDispatch = typeof store.dispatch

export default function RootLayout() {
	return (
		<Provider store={store}>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</Provider>
	)
}
