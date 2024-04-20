import { rightIcon } from "@utils/tabIcons";
import React, { useState, useRef, useEffect } from "react";
import {
	Animated,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from "react-native";
import { SvgXml } from "react-native-svg";

const customWidth = Dimensions.get("window").width;

const calcWidth = customWidth - 48;

const AnimatedButton = ({ text, onPress, newWidth = calcWidth }) => {
	const [expanded, setExpanded] = useState(false);
	const animation = useRef(new Animated.Value(0)).current;

	const toggleButton = () => {
		setExpanded(false);
		Animated.timing(animation, {
			toValue: expanded ? 0 : 1,
			duration: 600,
			delay: 1200
		}).start();
	};

	useEffect(() => {
		toggleButton();
	}, []);

	const [buttonWidth, setButtonWidth] = useState(0);
	useEffect(() => {
		const interpolatedWidth = animation.interpolate({
			inputRange: [0, 1],
			outputRange: [50, newWidth]
		});
		setButtonWidth(interpolatedWidth);
	}, []);
	const arrowOpacity = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [1, 0]
	});

	const textOpacity = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});

	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
			<Animated.View style={[styles.button, { width: buttonWidth }]}>
				<Animated.Text
					style={[
						styles.buttonText,
						{ opacity: textOpacity, fontFamily: "manrope-regular" }
					]}
				>
					{text}
				</Animated.Text>
				<Animated.View style={[styles.arrow, { opacity: arrowOpacity }]}>
					<SvgXml xml={rightIcon} width="20" color="#000000" height="20" />
				</Animated.View>
				<Animated.View style={[styles.arrow2, { opacity: textOpacity }]}>
					<SvgXml xml={rightIcon} width="20" color="#000000" height="20" />
				</Animated.View>
			</Animated.View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		position: "absolute",
		bottom: 16,
		zIndex: 50,
		marginHorizontal: 16
	},
	button: {
		backgroundColor: "#FFFFFF90",
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "start",
		flexDirection: "row",
		height: 48
	},
	buttonText: {
		color: "#343434",
		fontSize: 16,
		textAlign: "left",
		marginLeft: 24
	},
	arrow: {
		marginLeft: -50,
		backgroundColor: "white",
		height: 48,
		width: 48,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50
	},
	arrow2: {
		position: "absolute",
		right: 0,
		backgroundColor: "white",
		height: 48,
		width: 48,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50
	}
});

export default AnimatedButton;
