import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';


function Poems(props) {
	const [poems, setPoems] = useState([]);
	const author = props.location.pathname.slice(7);
	
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
	});

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
			<div className = 'main-flex'>
				<section className='container'>
					{poems.map((poem) => {
						return (
							<Link to={`/details/${poem.title}`} key={poem.title}>
								<div className='card'>
									<div className='card-title'>
										<h3 >{poem.title}</h3>
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
			<h1 id = "headings" className='main-flex'>{author}</h1>
		</>
	);
}

export default Poems;
