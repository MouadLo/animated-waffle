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
			<div className="parent">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
			</div>
		</div>
	);
}

export default App;
