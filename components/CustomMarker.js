import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

export default function CustomMarker({ name }) {
	const [animation] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true
		}).start();
	}, []);

	return (
		<Animated.View
			style={[
				styles.marker,
				{
					transform: [
						{
							scale: animation.interpolate({
								inputRange: [0, 1],
								outputRange: [0, 1]
							})
						}
					]
				}
			]}
		>
			<Text style={styles.color}>{name}</Text>
		</Animated.View>
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
