
import Poems from './components/Poems/Poems';
import Home from './components/Home/Home';
import Poem from './components/Poem/Poem';
import MyCollection from './components/MyCollection/MyCollection'
import React, { useState, useEffect } from 'react';
// import Birds from './components/Birds/Birds';
// import BirdDetails from './components/BirdDetails/BirdDetails';
import { Route, Link, Redirect } from 'react-router-dom';


function App() {

let [poetListNav, setPoetListNav] = useState([]); 
let [authorPoemList, setAuthorPoemList] = useState([]); 



let url = 'https://poetrydb.org/author'; 


useEffect(() => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			
      	// console.log(json.authors[0]);
				// console.log(json.authors);
        setPoetListNav(json.authors);
    
		})

		.catch(console.error);
}, []);

if (!setPoetListNav) {
	return <h1>Loading</h1>;
}




	return (
		<>
			<header>
				<h1>
					<a href='/'>Poetry Discovery</a>
				</h1>
			</header>

			<div className='menu'>
				<Link className='HomeNav' to='/'>
					Home{' '}
				</Link>
				<Link className='myCollection' to='/myCollection'>
					{' '}
					My Collection{' '}
				</Link>
			</div>

			<section className='container1'>
				{poetListNav.map((poet) => {
					return (
						<Link to={`/poems/${poet}`} key={poet}>
							<div className='nav'>
								<div className='nav-title'>
									<h3>{poet}</h3>
								</div>
							</div>
						</Link>
					);
				})}
			</section>

			<main>
				{poetListNav.map((poet) => {
					return <Route exact path={`/poems/${poet}`} component={Poems} />;
				})}
				<Route exact path='/' component={Home} />
				<Route exact path='/MyCollection' component={MyCollection} />
				<Route path='/details/:id' component={Poem} />
			
	
					
		
			</main>
		</>
	);
 }

export default App;
