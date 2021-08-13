import React,{useState} from 'react';
import FormInput from './../form-input/form-input.component';
import './edit.style.scss';

const EditItem=({id,items,update,setIsWrt})=>{
	const [data,setData]=useState({name:'',type:'',feedback:''})
	const {name,type,feedback}=data;

	const user_data=items[id];

  const handleChange=event=>{
    const {name,value}=event.target;
    setData({...data,[name]:value})
  }

  const handleSubmit=event=>{
  	event.preventDefault();

  	console.log(name,type,feedback);
  	let n=id;

  	let newHghlt={
  		id:n,
  		type,
  		feedback,
  		name
  	}

  	

  	update(newHghlt);
  	setIsWrt(null)
  }

	return (
		<div className='New-item'>
	    <h2>Edit Details</h2>
	    <form className="row" onSubmit={handleSubmit}>
	
	      <FormInput name="name" 
	      label="Name" 
	      type="text"
	      handleChange={handleChange} 
	
	      required />
	
	
	      <FormInput name="type" 
	      label="Type" 
	      type="text" 
	      handleChange={handleChange}
	      required />

	      <FormInput name="feedback" 
	      label="Feedback" 
	      type="text" 
	      handleChange={handleChange}
	      required />
	      
	      <div className="button">
	        <button type="submit">Done</button>
	        
	      </div>
	            
	    </form>
	   
	  </div>)

}

export default EditItem;