import React from "react"
import { View, Text } from "react-native"
import { TrendingUp, TrendingDown } from "lucide-react-native"
import { styles } from "./styles"

interface StatsCardProps {
	title: string
	value: string
	change: number
	positive: boolean
	unit?: string
}

export function StatsCard({ title, value, change, positive, unit = "" }: StatsCardProps) {
	return (
		<View style={styles.card}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.valueContainer}>
				<Text style={styles.value}>{value}</Text>
				{unit && <Text style={styles.unit}>{unit}</Text>}
			</View>
			<View style={styles.changeContainer}>
				{positive ? <TrendingUp size={12} color="#10b981" /> : <TrendingDown size={12} color="#ef4444" />}
				<Text style={[styles.changeText, { color: positive ? "#10b981" : "#ef4444" }]}>
					{Math.abs(change).toFixed(1)}%
				</Text>
			</View>
		</View>
	)
}
