import {
	Dimensions,
	Image,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native";
import React from "react";
import { useThemeContext } from "@contexts/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";

const customWidth = Dimensions.get("window").width;

const newWidth = customWidth - 56;
const imageWidth = customWidth - 24;
export default function Home() {
	const { theme } = useThemeContext();
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={["#FAF9F7", "#FFCF91"]}
				style={{ flex: 1, height: "100%" }}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
			>
				<ScrollView>
					<View
						style={{
							marginHorizontal: 24,
							flexDirection: "row",
							alignItems: "center",
							marginVertical: 16,
							paddingTop: 60
						}}
					>
						<View
							style={{
								backgroundColor: "#fff",
								paddingHorizontal: 16,
								paddingVertical: 12,
								borderRadius: 8,
								width: "fit"
							}}
						>
							<Text style={{ color: "#a5957e" }}>Saint Petersburg</Text>
						</View>
					</View>
					<View style={{ marginHorizontal: 24, marginVertical: 16 }}>
						<Text style={{ fontSize: 18, color: "#a5957e" }}>Hi, Marina</Text>
						<Text style={{ fontSize: 32, maxWidth: 300 }}>
							let's select your perfect place
						</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							marginHorizontal: 24,
							gap: 8,
							marginVertical: 20
						}}
					>
						<View style={styles.shape}>
							<Text style={styles.text1}>BUY</Text>
							<Text style={styles.text2}>1034</Text>
							<Text style={styles.text3}>offers</Text>
						</View>
						<View style={styles.shape2}>
							<Text style={styles.text4}>BUY</Text>
							<Text style={styles.text5}>1034</Text>
							<Text style={styles.text6}>offers</Text>
						</View>
					</View>
					<View
						style={{
							padding: 8,
							borderRadius: 32,
							backgroundColor: "#ffffff",
							flexDirection: "column",
							gap: 8
						}}
					>
						<View style={{ position: "relative" }}>
							<Image
								source={{
									uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713538289/pexels-fotoaibe-1571459_aytjf9.jpg"
								}}
								style={{ width: "100%", height: 190, borderRadius: 24 }}
							/>
						</View>
						<View style={{ flexDirection: "row", gap: 8 }}>
							<View style={{ position: "relative", width: imageWidth / 2 }}>
								<Image
									source={{
										uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713538489/pexels-fotoaibe-1571452_cwbikn.jpg"
									}}
									style={{ width: "100%", height: 190, borderRadius: 24 }}
								/>
							</View>
							<View style={{ position: "relative", width: imageWidth / 2 }}>
								<Image
									source={{
										uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713538289/pexels-fotoaibe-1571459_aytjf9.jpg"
									}}
									style={{ width: "100%", height: 190, borderRadius: 24 }}
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	shape: {
		width: newWidth / 2,
		height: newWidth / 2,
		backgroundColor: "#EFA23D",
		flexDirection: "column",
		borderRadius: 500,
		gap: 0,
		justifyContent: "center",
		alignItems: "center"
	},
	shape2: {
		width: newWidth / 2,
		height: newWidth / 2,
		backgroundColor: "#fff",
		flexDirection: "column",
		borderRadius: 29,
		gap: 0,
		justifyContent: "center",
		alignItems: "center"
	},
	text1: {
		color: "#fff",
		marginBottom: 30
	},
	text2: {
		color: "#fff",
		fontSize: 40,
		fontWeight: "600"
	},
	text3: {
		color: "#fff",
		marginBottom: 30
	},
	text4: {
		color: "#a5957e",
		marginBottom: 30
	},
	text5: {
		color: "#a5957e",
		fontSize: 40,
		fontWeight: "600"
	},
	text6: {
		color: "#a5957e",
		marginBottom: 30
	}
});
