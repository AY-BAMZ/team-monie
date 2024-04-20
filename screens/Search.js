import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { SvgXml } from "react-native-svg";
import {
	layerIcon,
	listIcon,
	searchOutlineIcon,
	settingsIcon
} from "@utils/tabIcons";
import CustomMarker from "@components/CustomMarker";
import FloatingMenu from "@components/FloatingButton";

const customWidth = Dimensions.get("window").width;

export default function Search() {
	const [region, setRegion] = useState({
		latitude: 51.5079145,
		longitude: -0.0899163,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	});

	const markers = [
		{
			name: "13km ap",
			coordinate: {
				latitude: 35.6662,
				longitude: 139.6531,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			}
		},
		{
			name: "13km ap",
			coordinate: {
				latitude: 35.6711,
				longitude: 139.6592,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			}
		},
		{
			name: "13km ap",
			coordinate: {
				latitude: 35.6882,
				longitude: 139.6573,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			}
		},
		{
			name: "13km ap",
			coordinate: {
				latitude: 35.6763,
				longitude: 139.6504,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			}
		}
	];

	const mapCustomStyle = [
		{ elementType: "geometry", stylers: [{ color: "#171717" }] },
		{ elementType: "labels.text.fill", stylers: [{ color: "#2B2B2B" }] },
		{ elementType: "labels.text.stroke", stylers: [{ color: "#2B2B2B" }] },
		{
			featureType: "administrative.locality",
			elementType: "labels.text.fill",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "poi.park",
			elementType: "geometry",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "road",
			elementType: "geometry",
			stylers: [{ color: "#4A4A4A" }]
		},
		{
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [{ color: "#212a37" }]
		},
		{
			featureType: "road",
			elementType: "labels.text.fill",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "road.highway",
			elementType: "geometry",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.stroke",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "road.highway",
			elementType: "labels.text.fill",
			stylers: [{ color: "#f3d19c" }]
		},
		{
			featureType: "transit",
			elementType: "geometry",
			stylers: [{ color: "#2f3948" }]
		},
		{
			featureType: "transit.station",
			elementType: "labels.text.fill",
			stylers: [{ color: "#d59563" }]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [{ color: "#232220" }]
		},
		{
			featureType: "water",
			elementType: "labels.text.fill",
			stylers: [{ color: "#2B2B2B" }]
		},
		{
			featureType: "water",
			elementType: "labels.text.stroke",
			stylers: [{ color: "#17263c" }]
		}
	];

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 35.6762,
					longitude: 139.6503,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01
				}}
				showsBuildings={false}
				showsPointsOfInterest={false}
				showsCompass={false}
				showsIndoorLevelPicker={false}
				showsMyLocationButton={false}
				showsScale={false}
				showsUserLocation={false}
				showsIndoors={false}
				showsTraffic={false}
				provider={PROVIDER_GOOGLE}
				userInterfaceStyle="dark"
				customMapStyle={mapCustomStyle}
				zoomEnabled={true}
				onRegionChangeComplete={(region) => setRegion(region)}
			>
				{markers?.map((item, index) => (
					<Marker key={index} coordinate={item.coordinate}>
						<CustomMarker name={item.name} />
					</Marker>
				))}
			</MapView>
			<View style={styles.searchBar}>
				<View style={styles.search}>
					<SvgXml
						xml={searchOutlineIcon}
						width="20"
						color="#262626"
						height="32"
					/>
					<TextInput
						placeholderTextColor="#222"
						style={styles.input}
						placeholder="Saint Petersburg"
					/>
				</View>
				<View style={styles.filter}>
					<SvgXml xml={settingsIcon} width="20" color="#262626" height="32" />
				</View>
			</View>
			<FloatingMenu />
			<View style={styles.navigation}>
				<View style={styles.nav}>
					<SvgXml xml={settingsIcon} width="20" color="#fff" height="32" />
				</View>
				<View
					style={[
						styles.navigate,
						{
							shadowStyle: {
								shadowOffset: { width: 5, height: 5 },
								shadowOpacity: 0.8,
								elevation: 5
							}
						}
					]}
				>
					<SvgXml xml={listIcon} width="20" color="#fff" height="32" />
					<Text style={{ color: "#fff", fontFamily: "manrope-regular" }}>
						List of variants
					</Text>
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
		alignItems: "center"
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
	searchBar: {
		position: "absolute",
		width: customWidth - 48,
		marginHorizontal: 24,
		gap: 12,
		flexDirection: "row",
		top: 60
	},

	navigation: {
		position: "absolute",
		width: customWidth - 48,
		marginHorizontal: 24,
		gap: 12,
		flexDirection: "row",
		bottom: 110,
		justifyContent: "space-between"
	},
	search: {
		gap: 8,
		alignItems: "center",
		backgroundColor: "#fff",
		width: customWidth - 106,
		height: 48,
		flexDirection: "row",
		borderRadius: 100,
		paddingHorizontal: 14
	},
	navigate: {
		gap: 8,
		alignItems: "center",
		backgroundColor: "#BABABA90",
		width: "fit",
		height: 48,
		flexDirection: "row",
		borderRadius: 100,
		paddingHorizontal: 14
	},
	filter: {
		flexDirection: "row",
		width: 48,
		height: 48,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff"
	},
	nav: {
		flexDirection: "row",
		width: 48,
		height: 48,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#BABABA90"
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
