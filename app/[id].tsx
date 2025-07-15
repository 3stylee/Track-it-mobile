import { useLocalSearchParams, useNavigation } from "expo-router"
import { useEffect } from "react"
import { View, Text } from "react-native"

export default function SingleActivity() {
	const { id, from } = useLocalSearchParams<{ id: string; from?: string }>()
	const navigation = useNavigation()

	useEffect(() => {
		navigation.setOptions({
			headerBackTitle: from || "Back",
		})
	}, [navigation, from])

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ fontSize: 24, fontWeight: "bold" }}>Single Activity</Text>
			<Text>ID: {id}</Text>
		</View>
	)
}
