import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Poems from '../Poems/Poems';


function Poem(props) {
	const [poem, setPoem] = useState(null);


    const { id } = useParams(); 
	 let url = `https://poetrydb.org/title/${id}/lines.json`;
   // let url2 = https://poetrydb.org/author,title/Shakespeare;Sonnet

    

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
              
		
				setPoem(json);
           
              
			})

			.catch(console.error);
	});

	if (!poem) {
		return <h1>Loading</h1>;
	}



	return (
		<>
			<section className='headings'>
				{poem.map((poe) => {
					return (
						<div className='cards'>
							<div id='headings' className='cards-title'>
								<h3 id='headings'>{poe.lines}</h3>
							</div>
						</div>
					);
				})}
			</section>
			<h1 id = 'headings' className='poetName'>{id}</h1>
			
		</>
	);
}

export default Poem;
