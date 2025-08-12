import { Tabs } from "expo-router"
import { Home, Activity, Calendar, Target } from "lucide-react-native"

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#1a1a1a",
					borderTopWidth: 1,
					borderTopColor: "#2a2a2a",
					height: 80,
					paddingBottom: 20,
					paddingTop: 10,
				},
				tabBarActiveTintColor: "#8b5cf6",
				tabBarInactiveTintColor: "#6b7280",
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: "500",
				},
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="activities"
				options={{
					title: "Activities",
					tabBarIcon: ({ size, color }) => <Activity size={size} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="calendar"
				options={{
					title: "Calendar",
					tabBarIcon: ({ size, color }) => <Calendar size={size} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="sessions"
				options={{
					title: "Sessions",
					tabBarIcon: ({ size, color }) => <Target size={size} color={color} />,
				}}
			/>
		</Tabs>
	)
}
