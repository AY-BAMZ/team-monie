import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
	return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const theme = {
		colors: {
			primary: isDarkTheme ? "#EFA23D" : "#EFA23D",
			primary10: isDarkTheme ? "#343a40" : "#212529",
			primary8: isDarkTheme ? "#343a40" : "#495057",
			primary7: isDarkTheme ? "#343a40" : "#868e96",
			primary6: isDarkTheme ? "#343a40" : "#adb5bd",
			primary5: isDarkTheme ? "#343a40" : "#ced4da",
			primary4: isDarkTheme ? "#343a40" : "#dee2e6",
			primary3: isDarkTheme ? "#343a40" : "#e9ecef",
			primary2: isDarkTheme ? "#343a40" : "#f1f3f5",
			primary1: isDarkTheme ? "#343a40" : "#f8f9fa",
			background: isDarkTheme ? "#232220" : "#232220",
			tabBackground: isDarkTheme ? "#2B2B2B" : "#2B2B2B",
			cardBackground: isDarkTheme ? "#212D3D" : "#EEF1FF",
			lightCardBackground: isDarkTheme ? "#2D4264" : "#dde0ee",
			hyperText: isDarkTheme ? "#8E73D5" : "#1E00AD",
			text: isDarkTheme ? "#ffffff" : "#292D32",
			textLight: isDarkTheme ? "#ddd" : "#555",
			textExtraLight: isDarkTheme ? "#ccc" : "#777",
			placeholder: isDarkTheme ? "#aaa" : "#aaa",
			black: isDarkTheme ? "#ffffff" : "#292D32",
			white: isDarkTheme ? "#7041FF" : "#ffffff",
			inputBackground: isDarkTheme ? "#212D3D" : "#F5F7F7",
			yellow: isDarkTheme ? "#FFFF00" : "#D3BE00",
			orange: isDarkTheme ? "#FE7902" : "#E36D00",
			green: isDarkTheme ? "#32C71A" : "#2D9A1C",
			red: isDarkTheme ? "#FF4C4C" : "#ff0000",
			shadowColor: isDarkTheme ? "#000" : "#99"
			// ... other theme properties
		}
		// ... other theme properties
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
