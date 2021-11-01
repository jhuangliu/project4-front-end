import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import App from '../../App'
import Poem from '../Poem/Poem'
import { Link, Route } from 'react-router-dom';


function Poems(props) {
	const [poems, setPoems] = useState([]);
	const author = props.location.pathname.slice(7);
	const {title} = useParams(); 
	let url = `https://poetrydb.org/author/${author}/title`;
	// let url2 = `https://poetrydb.org/title/Ozymandias/lines.json`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(props.location.pathname.slice(7));
				 console.log(json);
				// console.log(id);
				setPoems(json);
			})

			.catch(console.error);
	}, []);

	if (!poems) {
		return <h1>Loading</h1>;
	}

// render(() =>{
//     return(
//     <Sidebar data={this.state.data1}/>
//     );
//   });
	return (
		<>
			<section className='container'>
				{poems.map((poem) => {
					return (
						<Link to={`/details/${poem.title}`} key={poem.title}>
							<div className='card'>
								<div className='card-title'>
									<h3>{poem.title}</h3>
								</div>
							</div>
						</Link>
					);
				})}
			</section>
			<h1 className='poetName'>{author}</h1>
		
		</>
	);
}

export default Poems;
