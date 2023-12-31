import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { isLogin } = useContext(AuthContext);

	useEffect(() => {
		const token = Cookies.get("token");
		if (!token) {
			navigate("/");
		}
	}, [isLogin]);

	return <div>{children}</div>;
};
