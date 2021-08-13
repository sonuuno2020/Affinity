import React from 'react';
import HighLight from './../../components/highlights/highlight.component';


import './group-highlight.style.scss';

const GroupHighlight=({bucket,data,setData})=>{
	const color=["#4fde4f","#4fdec3","#d54fde","#d54ffe","#e54fde",
	"#f52b5b","#ff9800","#1becd9","#dbef1f"];


	return(
		<div className="group">
			{
				bucket.map(name=>
					<div className="container">
						<div className="name">
							<h2 >{name}</h2>
						</div>

						<div className='highlights'>
						{

							data.filter((item)=>item.type===name).map(user=>
								<div className="item">
								<div className="item zoomIn" style={{backgroundColor:color[Math.floor(Math.random()*color.length)]}}>
									<HighLight key={user.id} item={user} flag={true}/>
								</div>
								</div>	
						)
							
						}
						</div>
					
				

					</div>
				)
			}
		</div>	
		)
	
}


	

export default GroupHighlight;	
