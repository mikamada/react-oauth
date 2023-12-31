import axios from "axios";

function LoginButton() {
	const handleLogin = () => {
		axios
			.get(`${import.meta.env.VITE_REACT_API}/login/google`)
			.then((response) => {
				window.location.href = response.data.url;
			})
			.catch((error) => {
				console.error("Error fetching Google login URL:", error);
			});
	};

	return (
		<button
			className="bg-black text-white hover:bg-slate-800 font-bold py-2 px-4 rounded"
			onClick={handleLogin}>
			Google Login
		</button>
	);
}

export default LoginButton;
