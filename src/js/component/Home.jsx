import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx"
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<br />
			<div className='d-flex flex-row mb-3 justify-content-center'>
			<Cards />
			<Cards />
			<Cards />
			</div>
			<br />
			<Footer />
		</div>
	);
};

export default Home;
