import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { SvgXml } from "react-native-svg";
import {  searchOutlineIcon, settingsIcon } from "@utils/tabIcons";

const customWidth = Dimensions.get("window").width;

export default function Search() {
	return (
		<View style={{ flex: 1 }}>
			<MapView
			style={styles.map}
				initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
				}}
				userInterfaceStyle="dark"
				zoomEnabled
			/>
			<View style={styles.searchBar}>
			<View style={styles.search}>
			<SvgXml
					xml={searchOutlineIcon}
					width="20"
					color="#262626"
					height="32"
				/>
<TextInput style={styles.input} placeholder="Saint Petersburg" />
			</View>
			<View style={styles.filter}>
			<SvgXml
					xml={settingsIcon}
					width="24"
					color="#262626"
					height="32"
				/>
			</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  ...StyleSheet.absoluteFillObject,
	  flex: 1, //the container will fill the whole screen.
	  justifyContent: "flex-end",
	  alignItems: "center",
	},
	map: {
	  ...StyleSheet.absoluteFillObject,
	},
	searchBar: {
		position: "absolute",
		width: customWidth - 48,
		marginHorizontal: 24,
		gap:12,
	},
	search: {
		gap:8,
		alignItems: "center",
		backgroundColor: "#fff",
		top: 60,
		width: "100%",
		height: 48,
		flexDirection: "row",
		borderRadius: 100,
		paddingHorizontal: 14
	},
	filter:{
		flexDirection: "row",
		width: 48,
		height: 48,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center"
	}
  });
