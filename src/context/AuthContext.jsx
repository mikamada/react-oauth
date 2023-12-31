import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);

	const logout = () => {
		Cookies.remove("token");
		setIsLogin(false);
	}
	
	const login = () => {
		setIsLogin(true);
	}

	return (
		<AuthContext.Provider value={{ isLogin, logout, setIsLogin, login }}>
			{children}
		</AuthContext.Provider>
	);
};
