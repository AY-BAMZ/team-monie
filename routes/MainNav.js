import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { heart, homeIcon, messageIcon, searchIcon } from "@utils/tabIcons";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";
import Home from "@screens/Home";
import Profile from "@screens/Profile";
import { useThemeContext } from "@contexts/ThemeContext";

const Tab = createBottomTabNavigator();

const customWidth = Dimensions.get("window").width;

export default function MainNav() {
	const { theme } = useThemeContext();

	const marginWidth = customWidth - 288;
	const mx = marginWidth / 2;

	const screenOptions = {
		unmountOnBlur: false,
		headerShown: false,
		tabBarStyle: {
			backgroundColor: theme.colors.tabBackground,
			height: 68,
			width: 288,
			marginHorizontal: mx,
			position: "absolute",
			paddingHorizontal: 5,
			flexDirection: "row",
			justifyContent: "space-between",
			borderColor: theme.colors.tabBackground,
			borderTopWidth: 0,
			bottom: 30,
			borderRadius: 100
		},
		background: theme.colors.tabBackground,
		tabBarActiveTintColor: theme.colors.primary,
		tabBarInactiveTintColor: theme.colors.primary,
		tabBarLabel: "",
		tabBarLabelStyle: {
			marginTop: -5,
			marginBottom: -15
		},
		initialRouteNam: "Home"
	};
	const sceneContainerStyle = {
		backgroundColor: theme.colors.background
	};

	const initialRouteName = {
		initialRouteName: "Home"
	};
	return (
		<NavigationContainer>
			<Tab.Navigator
				{...{ screenOptions, sceneContainerStyle, initialRouteName }}
			>
				<Tab.Screen
					name="Search"
					component={Home}
					options={{
						tabBarButton: (props) => (
							<BigTabButton icon={searchIcon} {...props} />
						)
					}}
				/>
				<Tab.Screen
					name="Messages"
					component={Home}
					options={{
						tabBarButton: (props) => (
							<BigTabButton icon={messageIcon} {...props} />
						)
					}}
				/>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarButton: (props) => <BigTabButton icon={homeIcon} {...props} />
					}}
				/>
				<Tab.Screen
					name="Likes"
					component={Home}
					options={{
						tabBarButton: (props) => <BigTabButton icon={heart} {...props} />
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarButton: (props) => <BigTabButton icon={homeIcon} {...props} />
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const BigTabButton = (props) => {
	const { theme, toggleTheme } = useThemeContext();
	return (
		<Pressable
			style={[
				props.accessibilityState?.selected === true
					? styles.bigTabButton
					: styles.notTabButton,
				{ backgroundColor: theme.colors.tabBackground }
			]}
			onPress={() => props.onPress()}
		>
			<View
				style={[
					props.accessibilityState?.selected === true
						? styles.padButton
						: styles.notPadButton,
					{
						backgroundColor:
							props.accessibilityState?.selected === true
								? theme.colors.primary
								: theme.colors.background
					}
				]}
			>
				<SvgXml
					xml={props.icon}
					width="24"
					color={
						props.accessibilityState?.selected === true
							? "#fff"
							: theme.colors.white
					}
					height="32"
				/>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	tabContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	bigTabButton: {
		alignItems: "center",
		justifyContent: "center",
		width: 56,
		height: 56,
		marginHorizontal: 2,
		backgroundColor: "#fff",
		borderRadius: 50,
		marginTop: 6,
		// backgroundColor: "#1E00AD",
		// borderWidth: 5,
		borderColor: "#f7f7f7"
	},
	padButton: {
		backgroundColor: "#1E00AD",
		width: 56,
		height: 56,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	notPadButton: {
		backgroundColor: "#00000000",
		width: 48,
		height: 48,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	bigTabButtonText: {
		fontSize: 20,
		color: "#000"
	},
	notTabButton: {
		alignItems: "center",
		justifyContent: "center",
		width: 52,
		height: 52,
		marginHorizontal: 1,
		backgroundColor: "#FFF",
		borderRadius: 50,
		marginTop: 8,
		// backgroundColor: "#aaa",
		// borderWidth: 5,
		borderColor: "#f7f7f7"
	},
	iconTab: {
		color: "#fff"
	},
	notIconTab: {
		color: "#1E00AD"
	}
});
