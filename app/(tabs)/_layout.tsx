import { Tabs } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Colors } from "@/constants/Colors"
import { TouchableOpacity } from "react-native"
import { useState } from "react"
import { SettingsModal } from "@/components/settingsModal/index"

export default function Layout() {
	const [settingsVisible, setSettingsVisible] = useState(false)

	const handleSettingsPress = () => {
		setSettingsVisible(true)
	}

	return (
		<>
			<Tabs
				screenOptions={({ route }) => ({
					headerShown: true,
					headerStyle: { backgroundColor: Colors.light.primary },
					headerTintColor: "#fff",
					headerTitleStyle: { color: "#fff" },
					headerRight: () => (
						<TouchableOpacity onPress={handleSettingsPress} style={{ marginRight: 15 }}>
							<MaterialCommunityIcons name="cog" size={24} color="#fff" />
						</TouchableOpacity>
					),
					tabBarIcon: ({ color, size }) => {
						let iconName = ""
						switch (route.name) {
							case "index":
								iconName = "home"
								break
							case "activities":
								iconName = "format-list-bulleted"
								break
							case "sessions":
								iconName = "account-group"
								break
							case "calendar":
								iconName = "calendar"
								break
							default:
								iconName = "circle"
						}
						return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />
					},
					tabBarActiveTintColor: Colors.light.primary,
					tabBarInactiveTintColor: Colors.light.icon,
					tabBarStyle: {
						backgroundColor: Colors.light.background,
						borderTopColor: Colors.light.primary,
					},
				})}>
				<Tabs.Screen name="index" options={{ title: "Home" }} />
				<Tabs.Screen name="activities" options={{ title: "Activities" }} />
				<Tabs.Screen name="sessions" options={{ title: "Sessions" }} />
				<Tabs.Screen name="calendar" options={{ title: "Calendar" }} />
			</Tabs>

			<SettingsModal visible={settingsVisible} onClose={() => setSettingsVisible(false)} />
		</>
	)
}
