import React from "react";
import Nav from "./components/nav";
import Card from "./components/card";
import data from "./data";

export default function App() {
	const expData = data.map((data) => {
		return <Card key={data.id} data={data} />;
	});
	return (
		<main>
			<Nav />
			<div className="container">{expData}</div>
		</main>
	);
}
