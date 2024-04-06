import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

function MyQueryProviders({ children }) {
	const [client] = React.useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			<>{children}</>
		</QueryClientProvider>
	);
}

export default MyQueryProviders;
