import "../styles/globals.css";
import "../styles/tailwind.css";
import { ThemeProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}

export default MyApp;
