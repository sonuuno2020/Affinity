import React,{useState}  from 'react';
import Draggable from 'react-draggable';

import './homepage.style.scss';
import {ReactComponent as Logo} from './../../assets/document.png';


import EditItem from './../../components/Edit/edit.component';
import AddItem from './../../components/AddItem/additem.component';
import HighLight from './../../components/highlights/highlight.component';


const HomePage=({bucket,setBucket,data,setData,update,remove,editUpdate})=>{
	
	const [flag,setFlag]=useState(false);
	const [type,setType]=useState("N/A");
	const [isWrite,setIsWrt]=useState(null);
	const [active,SetActive]=useState(0);
	

	const color=["#4fde4f","#4fdec3","#d54fde",
	"#f52b5b","#ff9800","#1becd9","#dbef1f"];

	function fun(){
		
		setFlag(!flag)
		console.log(flag);
		
	}

	function onStart(){
		SetActive(active+1)
	}
	function onStop(){
		SetActive(active-1)
	}

	const handleSelect=event=>{
		
		const {name,value}=event.target;

		setType(value);

	}
	
	const dragHandlers = {onStart, onStop};
	
	
	return(
		<div className="homepage">
			
			<div className="upper">
				<div className='search'>
					<label className="filter">Filter By:</label>
					<select className = "dropdown" onClick={handleSelect}>
					    <option default value="N/A">select</option>
					    {
					    	bucket.map(name=><option  value={name}>{name}</option>)
					    }
					   
					</select>
				</div>	

				<div className="image-container" onClick={fun}>
					<img height="50px" width="50px"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAACSkpLNzc0gICBXV1elpaXs7Ozc3NwEBATx8fELCwtzc3OioqLi4uItLS2cnJz39/coKCjX19dSUlKsrKw5OTlHR0eBgYG9vb0cHByGhoZsbGyVlZUPDw95eXkwMDBNkWukAAAC10lEQVR4nO3di27aQBBGYRPTmktDINwLafL+T1maRhUBW2XFzPxT95wXsD8WIXttdquKiIiIiIiIiP7jmmVt10StuWy/exqY9r1Rk86bPNjq3hsmIj46+DIRm60PMA2x9vJlIXoCT8SZ2leNXIEJRnGxcRbKR/HgDRwMnqXEpT9QPIrHCKGSOAsBKr+oL0FCHXFlbxmnIk7sgYPhOhPR45d02nUZLyF2fNx3Cqt5HmLHqdwrTDSKHre9v4R5iG7CNEQ/YRaiozAJ0VOYg+gq7CI+RRJ9hRmIzsIERG+hnugulBP9hWpigFBMjBBqiSFCKTFGqCQGCYXEKKGOGCaUEeOEKmKgUESMFGqIoUIJMVaoIAYLBcRoYTwxXBhOjBdGEwXCYKJCGEuUCEOJGmEkUSQMJKqEcUSZMOyxjU4YRRQKg4hKYQxRKgwhaoVdxIf+CDuIfRK2E3slbCX2S9hG7Jmwhdg34TWxd8IrYnbhj/LTuHjNNbtw8PqttNfnf0t4dwgRItSHECFCfQgRItSHECFCfQgRItSHECFCfQgRlgvnX626bR2OcOF4YXa8RcfyPGqh3TqkE4QIi0OIsDSECMtDiLA0hAjLQ4iwtKTCqaFwmlI4WH2x6rZFfZmJQohQH0KECPUhRIhQH0KECPUhtBcO7copHM8aq2Y5Z6L6P9eGsCCECMtDiLA0hAjLQ4iwNIQIy0P4W9j/d/XrkVV1TmF4CBEi1IcQIUJ9CBEi1IcQIUJ9CBGed9s6FdHNDYXrvx9O0NpQuFRjWlsaCidqTGt2M9CnbvurVWwrS2D1oua09GIqnKk5LRnvS3ZUe6462gKrkRp01chYWB3UoosO1sBqsVGbPrWxe5T3p9veao3KZUPZWq06q/YAJrp2G1ter32q2apt720bL2DVuRNhaI+OvlMT9c3wg+cAfrTfvYl0b7u9P++jZllHtwwYPCIiIiIiIiLK209iSXmAAJdI0QAAAABJRU5ErkJggg=="/>
				</div>
				{	flag?<AddItem users={data} update={update} setFlag={setFlag}/>:null}
			</div>
			<div className="container">
				
					<div className="highlights">
						{
							type==="N/A"?
							data.map(user=>
							<Draggable {...dragHandlers}>	
								<div className="item zoomIn" style={{backgroundColor:color[Math.floor(user.id%color.length)]}}>
									<HighLight key={user.id} item={user} remove={remove} setIsWrt={setIsWrt} flag={false}/>
								</div>
							</Draggable>	
							)
							:data.filter((item)=>item.type===type).map(user=>
							<Draggable {...dragHandlers}>		
								<div className="item zoomIn" style={{backgroundColor:color[Math.floor(user.id%color.length)]}}>
									<HighLight key={user.id} item={user} remove={remove} setIsWrt={setIsWrt} setItems={setData}flag={false}/>
								</div>
							</Draggable>		
							)
						}
					
					</div>
				
			</div>
			{
        
        isWrite?<EditItem id={isWrite} items={data} setIsWrt={setIsWrt} update={editUpdate} setItems={setData} remove={remove}/>:null
      }
      
		</div>

	)
}

export default HomePage;

//https://reactjsexample.com/a-simple-component-for-making-elements-draggable/