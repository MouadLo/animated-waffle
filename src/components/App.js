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
			<div>Gardients</div>
		</div>
	);
}

export default App;
