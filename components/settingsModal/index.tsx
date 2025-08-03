import React from "react"
import { Modal, View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Colors } from "@/constants/Colors"
import * as SecureStore from "expo-secure-store"
import { useRouter } from "expo-router"
import { settingsStyles } from "./styles"

interface SettingsModalProps {
	visible: boolean
	onClose: () => void
}

export function SettingsModal({ visible, onClose }: SettingsModalProps) {
	const router = useRouter()

	const handleLogout = async () => {
		await SecureStore.deleteItemAsync("strava_access_token")
		await SecureStore.deleteItemAsync("strava_refresh_token")
		await SecureStore.deleteItemAsync("strava_expires_at")
		await SecureStore.deleteItemAsync("strava_user_id")

		onClose()
		router.replace("/auth")
	}

	return (
		<Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
			<SafeAreaView style={settingsStyles.container}>
				<View style={settingsStyles.header}>
					<Text style={settingsStyles.title}>Settings</Text>
					<TouchableOpacity onPress={onClose} style={settingsStyles.closeButton}>
						<MaterialCommunityIcons name="close" size={24} color={Colors.light.text} />
					</TouchableOpacity>
				</View>

				<View style={settingsStyles.content}>
					<TouchableOpacity style={settingsStyles.settingItem}>
						<MaterialCommunityIcons name="account" size={24} color={Colors.light.primary} />
						<Text style={settingsStyles.settingText}>Profile</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} color={Colors.light.icon} />
					</TouchableOpacity>

					<TouchableOpacity style={settingsStyles.settingItem}>
						<MaterialCommunityIcons name="bell" size={24} color={Colors.light.primary} />
						<Text style={settingsStyles.settingText}>Notifications</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} color={Colors.light.icon} />
					</TouchableOpacity>

					<TouchableOpacity style={settingsStyles.settingItem}>
						<MaterialCommunityIcons name="help-circle" size={24} color={Colors.light.primary} />
						<Text style={settingsStyles.settingText}>Help & Support</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} color={Colors.light.icon} />
					</TouchableOpacity>

					<TouchableOpacity style={settingsStyles.settingItem}>
						<MaterialCommunityIcons name="information" size={24} color={Colors.light.primary} />
						<Text style={settingsStyles.settingText}>About</Text>
						<MaterialCommunityIcons name="chevron-right" size={24} color={Colors.light.icon} />
					</TouchableOpacity>

					<TouchableOpacity
						style={[settingsStyles.settingItem, settingsStyles.logoutItem]}
						onPress={handleLogout}>
						<MaterialCommunityIcons name="logout" size={24} color="#ff4444" />
						<Text style={[settingsStyles.settingText, settingsStyles.logoutText]}>Logout</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</Modal>
	)
}
