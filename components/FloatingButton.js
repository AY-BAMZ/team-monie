import { bagIcon, layerIcon, walletIcon } from "@utils/tabIcons";
import React, { useRef, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Modal,
	StyleSheet,
	Animated
} from "react-native";
import { SvgXml } from "react-native-svg";

const FloatingMenu = () => {
	const [isMenuVisible, setMenuVisible] = useState(false);
	const scaleAnim = useRef(new Animated.Value(0)).current;

	const handleLongPress = () => {
		Animated.timing(scaleAnim, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true
		}).start();
		setMenuVisible(true);
	};

	const handlePressOut = () => {
		Animated.timing(scaleAnim, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true
		}).start(() => {
			setMenuVisible(false);
		});
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={handleLongPress}
				onPressOut={handlePressOut}
				style={styles.nav2}
			>
				<SvgXml xml={layerIcon} width="20" color="#fff" height="32" />
			</TouchableOpacity>
			<Modal
				visible={isMenuVisible}
				transparent
				animationType="fade"
				onRequestClose={() => setMenuVisible(false)}
			>
				<TouchableOpacity
					style={styles.modalBackground}
					activeOpacity={1}
					onPress={() => setMenuVisible(false)}
				>
					<Animated.View
						style={[styles.menu, { transform: [{ scale: scaleAnim }] }]}
					>
						<TouchableOpacity style={styles.menuOption}>
							<SvgXml xml={layerIcon} width="20" color="#343434" height="32" />
							<Text>Cosy Area</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.menuOption, { color: "#EFA23D" }]}>
							<SvgXml xml={walletIcon} width="20" color="#EFA23D" height="32" />
							<Text style={{ color: "#EFA23D" }}>Price</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuOption}>
							<SvgXml xml={bagIcon} width="20" color="#343434" height="32" />
							<Text>Infrastructure</Text>
						</TouchableOpacity>
					</Animated.View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		bottom: 0
	},
	button: {
		padding: 10,
		backgroundColor: "lightblue",
		borderRadius: 10
	},
	modalBackground: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center"
	},
	menu: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
		borderBottomLeftRadius: 0,
		position: "absolute",
		bottom: 164,
		left: 24,
		gap: 6
	},
	menuOption: {
		paddingVertical: 0,
		flexDirection: "row",
		alignItems: "center",
		gap: 6
	},
	nav2: {
		position: "absolute",
		flexDirection: "row",
		width: 48,
		height: 48,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#BABABA90",
		bottom: 164,
		left: 24
	}
});

export default FloatingMenu;
