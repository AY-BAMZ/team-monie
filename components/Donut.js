import * as React from "react";
import {
	Easing,
	TextInput,
	Animated,
	Text,
	View,
	StyleSheet
} from "react-native";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
	percentage = 1000,
	radius = 40,
	duration = 500,
	color = "tomato",
	delay = 0,
	textColor,
	max = 100
}) {
	const animated = React.useRef(new Animated.Value(0)).current;
	const inputRef = React.useRef();

	const animation = (toValue) => {
		return Animated.timing(animated, {
			delay: 1000,
			toValue,
			duration,
			useNativeDriver: true,
			easing: Easing.out(Easing.ease)
		}).start(() => {
			animation(toValue === 0 ? percentage : 0);
		});
	};

	React.useEffect(() => {
		animation(percentage);
		animated.addListener(
			(v) => {
				if (inputRef?.current) {
					inputRef.current.setNativeProps({
						text: `${Math.round(v.value)}`
					});
				}
			},
			[max, percentage]
		);

		return () => {
			animated.removeAllListeners();
		};
	});

	return (
		<View style={{ width: 100, height: 48 }}>
			<AnimatedTextInput
				ref={inputRef}
				underlineColorAndroid="transparent"
				editable={false}
				defaultValue="0"
				style={[
					StyleSheet.absoluteFillObject,
					{ fontSize: 40, color: textColor ?? color },
					styles.text
				]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	text: { fontWeight: "600", textAlign: "center" }
});
