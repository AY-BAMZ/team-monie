// import "react-native-gesture-handler";
import { toastConfig } from "@lib/Toast/toastConfig";
import React, { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import MyQueryProviders from "./lib/provider";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";
import MainNav from "@routes/MainNav";
import ThemeProvider from "@contexts/ThemeContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontLoaded] = useFonts({
		"manrope-extralight": require("./assets/font/Manrope-ExtraLight.ttf"),
		"manrope-light": require("./assets/font/Manrope-Light.ttf"),
		"manrope-regular": require("./assets/font/Manrope-Regular.ttf"),
		"manrope-medium": require("./assets/font/Manrope-Medium.ttf"),
		"manrope-semibold": require("./assets/font/Manrope-SemiBold.ttf"),
		"manrope-bold": require("./assets/font/Manrope-Bold.ttf"),
		"manrope-extrabold": require("./assets/font/Manrope-ExtraBold.ttf")
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
				<ThemeProvider>
					<MyQueryProviders>
						<Toast config={toastConfig} position="bottom" bottomOffset={20} />
						<MainNav />
					</MyQueryProviders>
				</ThemeProvider>
			</GestureHandlerRootView>
		</>
	);
}
