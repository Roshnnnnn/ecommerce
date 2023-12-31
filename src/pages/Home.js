import React from "react";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

const Home = () => {
	return (
		<div>
			<NavBar>
				<ProductList />
			</NavBar>
		</div>
	);
};

export default Home;
