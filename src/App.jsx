import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from "react-router-dom";
import CallbackPage from "./pages/CallbackPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/profile",
			element: (
				<ProtectedRoute>
					<ProfilePage />
				</ProtectedRoute>
			),
		},
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/api/auth/google/callback",
			element: <CallbackPage />,
		},
	]);

	return (
		<RouterProvider router={router}>
			<Outlet />
		</RouterProvider>
	);
};

export default App;
