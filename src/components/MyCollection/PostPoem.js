
import Axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
function PostPoem() {
    let url = 'http://localhost:8000/poems/';
    const [data, setData] = useState({
        title: "",
        author: "",
        body: ""


    })
    
    function submit(e)
    {
        e.preventDefault(); 
        Axios.post(url,{
           title: data.title,
            author: data.author,
            body: data.body
        })
        .then(res=> {
            console.log(res(data))
        })
    }
    
    function handle(e)
    {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)


    }
    return (
			<div>
				<form onSubmit={(e)=> submit(e)}>
					<input onChange={(e) => handle(e)} id='title'value = {data.title} placeholder='title' type='text'></input>
					<input onChange={(e) => handle(e)} id='author'value = {data.author}placeholder='author' type='text'></input>
					<input onChange={(e) => handle(e)} id='body'value = {data.body}placeholder='body' type='text'></input>
                    <button>Submit</button>
				</form>
			</div>
		);
}

export default PostPoem;