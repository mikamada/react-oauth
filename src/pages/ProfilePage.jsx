import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Layout from "../components/Layout";

const ProfilePage = () => {
	const [data, setData] = useState({});

	const getProfile = async () => {
		const token = Cookies.get("token");
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		if (token) {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_REACT_API}/setting`,
					config
				);
				setData(res.data.user);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<Layout>
			<div className="flex justify-center items-center min-h-screen px-6">
				<div className="max-w-md mx-auto mt-8 bg-white rounded-xl overflow-hidden shadow-md md:flex">
					<div className="md:flex-shrink-0">
						<img
							className="h-full w-full object-cover md:w-48"
							src={data.image}
							alt={`${data.name}'s profile`}
						/>
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							{data.name}
						</div>
						<a
							href={`mailto:${data.email}`}
							className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
							{data.email}
						</a>
						<p className="mt-2 text-gray-500">
							“The only limit to our realization of tomorrow will be our doubts
							of today.” - Franklin D. Roosevelt',
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProfilePage;
