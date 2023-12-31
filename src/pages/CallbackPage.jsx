import { useEffect, useCallback, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function CallbackPage() {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);
	const handleCallback = useCallback(async (code) => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_REACT_API}/auth/google/callback?code=${code}`
			);
			const { token } = response.data.authorization;

			Cookies.set("token", token, { expires: 1, path: "/" });
			const checkToken = Cookies.get("token");
			if (checkToken) {
				login();
				navigate("/");
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get("code");

		handleCallback(code);
	}, [handleCallback]);

	return <div>Handling Google Callback...</div>;
}

export default CallbackPage;
