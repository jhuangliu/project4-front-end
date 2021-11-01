import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Poems from '../Poems/Poems';


function Poem(props) {
	const [poem, setPoem] = useState(null);
	const [poem1, setPoem1] = useState(props);
    const v = useParams(); 
    const { id } = useParams(); 
	 let url = `https://poetrydb.org/title/${id}/lines.json`;
   // let url2 = https://poetrydb.org/author,title/Shakespeare;Sonnet

    

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
                console.log(poem1);
				 console.log(props.name);
                 console.log(id);
                 console.log(v);
				console.log(json);
				setPoem(json);
                console.log(poem);
                console.log(url); 
              
			})

			.catch(console.error);
	}, []);

	if (!poem) {
		return <h1>Loading</h1>;
	}



	return (
		<>
			<section className='container'>
				{poem.map((poe) => {
					return (
					
							<div className='cards'>
								<div className='cards-title'>
									<h3>{poe.lines}</h3>
								</div>
							</div>
					
					);
				})}
			</section>
			<h1 className='poetName'>{id}</h1>
			
		</>
	);
}

export default Poem;
