import React, { useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";
import LoginButton from "./LoginButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const [dataUser, setDataUser] = useState({});
	const navigate = useNavigate();
	const { logout, isLogin } = useContext(AuthContext);

	const fetchUser = async (token) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			axios
				.get(`${import.meta.env.VITE_REACT_API}/setting`, config)
				.then((res) => {
					if (res.data) {
						setDataUser(res.data.user);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			fetchUser(token);
		}
	}, [isLogin]);

	return (
		<div className="w-full flex flex-col md:flex-row justify-between items-center h-fit p-8 border-b bg-white z-10">
			<div className="mb-4 md:mb-0">
				<Link to={"/"}>
					<h1 className="text-3xl text-slate-800 font-bold">GoTube</h1>
				</Link>
			</div>
			<div className="flex items-center">
				{isLogin ? (
					<div className="flex justify-center items-center gap-3">
						<div
							className="flex justify-center items-center gap-2 cursor-pointer"
							onClick={() => navigate("/profile")}>
							<img
								src={dataUser?.image}
								alt="photo profile"
								className="h-9 w-9 rounded-full object-center"
							/>
							<p>{dataUser?.name}</p>
						</div>

						<button
							onClick={logout}
							className="bg-black text-white hover:bg-slate-800 font-bold py-2 px-4 rounded">
							Logout
						</button>
					</div>
				) : (
					<LoginButton />
				)}
			</div>
		</div>
	);
};

export default Navbar;
