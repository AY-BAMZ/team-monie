// import "react-native-gesture-handler";
import { toastConfig } from "@lib/Toast/toastConfig";
import React, { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import MyQueryProviders from "./lib/provider";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontLoaded] = useFonts({
		"spacegrotesk-light": require("./assets/font/SpaceGrotesk-Light.ttf"),
		"spacegrotesk-regular": require("./assets/font/SpaceGrotesk-Regular.ttf"),
		"spacegrotesk-medium": require("./assets/font/SpaceGrotesk-Medium.ttf"),
		"spacegrotesk-semibold": require("./assets/font/SpaceGrotesk-SemiBold.ttf"),
		"spacegrotesk-bold": require("./assets/font/SpaceGrotesk-Bold.ttf")
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontLoaded]);

	if (!fontLoaded) {
		return null;
	}

	return (
		<>
			<GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<MyQueryProviders>
					<Toast config={toastConfig} position="bottom" bottomOffset={20} />
					<Text>Hello There</Text>
				</MyQueryProviders>
			</GestureHandlerRootView>
		</>
	);
}
