import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CustomMarker({ name }) {
	return (
		<View style={styles.marker}>
			<Text style={styles.color}>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	marker: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: "#EFA23D",
		borderRadius: 12,
		elevation: 10,
		borderBottomLeftRadius: 0
	},
	color: {
		color: "#fff"
	}
});
