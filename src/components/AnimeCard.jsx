import React from "react";

const AnimeCard = ({ title, image, genres, episodes }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg transition transform hover:scale-105 bg-white">
			<img
				className="w-full h-48 object-cover rounded-lg"
				src={image}
				alt={title}
			/>
			<div className="p-4 text-slate-800">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					{genres.map((genre, idx) => (
						<span
							key={idx}
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{genre.name}
						</span>
					))}
				</p>
				<p className="text-gray-700 text-base">{episodes} Episodes</p>
			</div>
		</div>
	);
};

export default AnimeCard;
