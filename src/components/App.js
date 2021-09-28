import './App.css';

import Home from './Home/Home';
import ProductList from './ProductList/ProductList';

function App() {
	const ProductsDiv = [
		<div>One</div>,
		<div className="two">Two</div>,
		<div>Three</div>,
	];

	return (
		<div className="App">
			<h3>Flex</h3>
			<div className="flex">
				<div>One</div>
				<div>Two</div>
				<div style={{ flexShrink: 3 }}>Three</div>
				<div>Four</div>
				<div>Five</div>
			</div>
			<div class="in">In</div>
		</div>
	);
}

export default App;
