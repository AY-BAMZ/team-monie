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
import * as Animatable from "react-native-animatable";
import Donut from "@components/Donut";
import AnimatedButton from "@components/Buuton";

const customWidth = Dimensions.get("window").width;

const newWidth = customWidth - 56;
const imageWidth = customWidth - 24;
const buttonSmallWidth = customWidth - 84;

const fadeInBottom = {
	0: {
		opacity: 0,
		translateY: 100
	},
	1: {
		opacity: 1,
		translateY: 0
	}
};

const fadeInBottom2 = {
	0: {
		opacity: 0,
		translateY: 30
	},
	1: {
		opacity: 1,
		translateY: 0
	}
};

const fadeInLeft = {
	0: {
		opacity: 0,
		translateX: -100
	},
	1: {
		opacity: 1,
		translateX: 0
	}
};
const DURATION = 500;
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
							paddingTop: 60,
							justifyContent: "space-between"
						}}
					>
						<Animatable.View
							style={{
								backgroundColor: "#fff",
								paddingHorizontal: 16,
								paddingVertical: 12,
								borderRadius: 8,
								width: "fit"
							}}
							animation={fadeInLeft}
							duration={DURATION}
							delay={600}
						>
							<Text style={{ color: "#a5957e" }}>Saint Petersburg</Text>
						</Animatable.View>
						<Image
							source={{
								uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713540889/portrait-smiling-teenage-girl-orange-background-cute-to-camera-166946448_iinje0.webp"
							}}
							style={{ width: 48, height: 48, borderRadius: 48 }}
						/>
					</View>
					<View style={{ marginHorizontal: 24, marginVertical: 16 }}>
						<Animatable.Text
							animation={fadeInBottom2}
							duration={DURATION}
							delay={600}
							style={{ fontSize: 18, color: "#a5957e" }}
						>
							Hi, Marina
						</Animatable.Text>
						<Animatable.Text
							animation={fadeInBottom2}
							duration={DURATION}
							delay={600}
							style={{ fontSize: 32, maxWidth: 300 }}
						>
							let's select your perfect place
						</Animatable.Text>
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
							<Donut
								percentage={1424}
								color={"#ffffff"}
								delay={500}
								max={1634}
							/>
							<Text style={styles.text3}>offers</Text>
						</View>
						<View style={styles.shape2}>
							<Text style={styles.text4}>BUY</Text>
							<Donut
								percentage={1034}
								color={"#a5957e"}
								delay={500}
								max={1634}
							/>
							<Text style={styles.text6}>offers</Text>
						</View>
					</View>
					<Animatable.View
						animation={fadeInBottom}
						duration={DURATION}
						delay={600}
						style={{
							padding: 8,
							borderRadius: 32,
							borderBottomEndRadius: 0,
							borderBottomLeftRadius: 0,
							backgroundColor: "#ffffff",
							flexDirection: "column",
							gap: 8,
							paddingBottom: 100
						}}
					>
						<Animatable.View
							style={{ position: "relative" }}
							animation={fadeInBottom}
							duration={DURATION}
							delay={1200}
						>
							<Image
								source={{
									uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713603431/pexels-fotoaibe-1571452_f5l4db.jpg"
								}}
								style={{ width: "100%", height: 190, borderRadius: 24 }}
							/>
							<AnimatedButton text={"No3, Ikeja"} />
						</Animatable.View>
						<Animatable.View
							style={{ flexDirection: "row", gap: 8 }}
							animation={fadeInBottom}
							duration={DURATION}
							delay={1200}
						>
							<View style={{ position: "relative", width: imageWidth / 2 }}>
								<Image
									source={{
										uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713603431/pexels-fotoaibe-1571459_zblunz.jpg"
									}}
									style={{ width: "100%", height: 388, borderRadius: 24 }}
								/>
								<AnimatedButton
									text={"No3, Ikeja"}
									newWidth={buttonSmallWidth / 2}
								/>
							</View>
							<View
								style={{
									position: "relative",
									width: imageWidth / 2,
									flexDirection: "column",
									gap: 8
								}}
							>
								<View
									style={{
										position: "relative",
										width: imageWidth / 2
									}}
								>
									<Image
										source={{
											uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713603431/pexels-fotoaibe-1571452_f5l4db.jpg"
										}}
										style={{ width: "100%", height: 190, borderRadius: 24 }}
									/>
									<AnimatedButton
										text={"No3, Ikeja"}
										newWidth={buttonSmallWidth / 2}
									/>
								</View>
								<View
									style={{
										position: "relative",
										width: imageWidth / 2
									}}
								>
									<Image
										source={{
											uri: "https://res.cloudinary.com/dmixz7eur/image/upload/v1713603431/pexels-fotoaibe-1571459_zblunz.jpg"
										}}
										style={{ width: "100%", height: 190, borderRadius: 24 }}
									/>
									<AnimatedButton
										text={"No3, Ikeja"}
										newWidth={buttonSmallWidth / 2}
									/>
								</View>
							</View>
						</Animatable.View>
					</Animatable.View>
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
