import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import AnimeCard from "../components/AnimeCard";

const Home = () => {
	const [popularAnime, setPopularAnime] = useState([]);

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
		<Layout>
			<div className="mt-10 px-8">
				<h1 className="text-3xl font-bold text-slate-800">Popular Anime</h1>
				<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-8">
					{popularAnime &&
						popularAnime.map((item) => (
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
		</Layout>
	);
};

export default Home;
