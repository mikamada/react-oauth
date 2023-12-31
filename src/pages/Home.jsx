import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";

const Home = () => {
	const [pupularAnime, setPopularAnime] = useState([]);

	const getPopularAnime = async () => {
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_REACT_PUBLIC_API}/top/anime`
			);
			setPopularAnime(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPopularAnime();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="mt-10 px-8">
				<h1 className="text-3xl font-bold text-slate-800">Popular Anime</h1>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-8">
					{pupularAnime &&
						pupularAnime.map((item) => (
							<AnimeCard
								key={item.mal_id}
								episodes={item.episodes}
								genres={item.genres}
								title={item.title}
								image={item.images.jpg.image_url}
								genre={item.genres}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;