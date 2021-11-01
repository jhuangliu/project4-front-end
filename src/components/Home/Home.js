import React, { useState, useEffect} from 'react'; 

const Home = () =>{
	const [home, setHome] = useState();
	const [quote, setQuote] = useState();
	const [click, setClick] = useState(false);
	const [quoteClick, setQuoteClick] = useState(true);
	const [index, setIndex] = useState(0);


return (
	<div>
		<h1>Welcome to the Poetry Discovery</h1>
        <h2>Click on an author to learn more!</h2>
	</div>
);



}

export default Home; 