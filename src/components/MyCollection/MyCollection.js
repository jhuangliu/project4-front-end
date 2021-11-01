import React, { useState, useEffect } from 'react';

const MyCollection = () => {
	const [myPoems, setMyPoems] = useState();

    let url = 'http://localhost:8000/poems/'

    useEffect(() => {
			fetch(url)
				.then((res) => res.json())
				.then((json) => {
                    console.log(json); 
					setMyPoems(json);
				})

				.catch(console.error);
		}, []);
	

	if (!myPoems) {
		return <h1>Loading</h1>;
	}


	 return (
			<div>
				<h1 class = 'main'>Favorited Poems</h1>
				<section className='container'>
					{myPoems.map((poe) => {
						return (
							<div className='cards'>
								<div className='cards-title'>
									<h3>{poe.title}</h3>
									<h3>{poe.author}</h3>
									<h3>{poe.body}</h3>
								</div>
							</div>
						);
					})}
				</section>
                <form action="">


                </form>
			</div>
		);
};

export default MyCollection;
