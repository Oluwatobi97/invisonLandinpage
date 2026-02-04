import { Navbar } from "./components/Navbar";

function App() {
	const links = [
		{ href: "#", label: "links" },
		{ href: "#", label: "links" },
		{ href: "#", label: "links" },
		{ href: "#", label: "links" }
	];
	return (
		<div className="min-h-screen bg-blue-400">
			<Navbar links={links} />
		</div>
	);
}

export default App;
