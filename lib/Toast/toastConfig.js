import {
	BaseToast,
	ErrorToast,
	SuccessToast
} from "react-native-toast-message";

export const toastConfig = {
	success: (props) => (
		<SuccessToast
			{...props}
			style={{
				borderLeftColor: "white",
				backgroundColor: "green",
				zIndex: 1000
			}}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 14,
				fontWeight: "400",
				color: "white"
			}}
			text2Style={{
				fontSize: 14,
				color: "white"
			}}
		/>
	),

	default: (props) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: "pink", zIndex: 1000 }}
			contentContainerStyle={{ paddingHorizontal: 14 }}
			text1Style={{
				fontSize: 14,
				fontWeight: "400"
			}}
			text2Style={{
				fontSize: 14,
				color: "black"
			}}
		/>
	),

	error: (props) => (
		<ErrorToast
			{...props}
			style={{ borderLeftColor: "white", backgroundColor: "red", zIndex: 1000 }}
			text1Style={{
				fontSize: 16,
				color: "white"
			}}
			text2Style={{
				fontSize: 14,
				color: "white"
			}}
		/>
	)
};
