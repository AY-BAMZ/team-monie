// import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
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
						<MainNav />
				</ThemeProvider>
			</GestureHandlerRootView>
		</>
	);
}
