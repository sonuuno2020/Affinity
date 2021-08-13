import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import AddBucket from './../AddBucket/addbucket.component';



import './header.style.scss';

const Header=({bucket,setBucket})=>{
	const [flag,setFlag]=useState(false);


	const addHighlgt=event=>{
		setFlag(true)
	}

	function update(element){
		console.log(element)
		setBucket([...bucket,element])
		setFlag(false);
		
	}

	return (
		<div className="header">
			<Link to="/" className="Message">
			   <h1>Message/Affinity Map</h1>
			</Link>
			
			<div className="options">

				
					<div className="option" onClick={addHighlgt}>
						
		        	New Bucket
		      
						
					</div>
					{flag?<AddBucket  update={update}/>:null}
					<div className="option" >
						<Link to="/group" className="link">
			     	  Group Highligts
			      </Link>
							
					
					</div>

					
						
					
		
				
			</div>
		
		</div>
	)


	}



export default Header;