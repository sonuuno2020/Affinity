import React,{useState} from 'react';
import FormInput from './../form-input/form-input.component';
import './additem.style.scss';

const AddItem=({users,update,setFlag})=>{
	const [data,setData]=useState({name:'',type:'',feedback:''})
	const {name,type,feedback}=data;

	const user_data=users;

  const handleChange=event=>{
    const {name,value}=event.target;
    setData({...data,[name]:value})
  }

  const handleSubmit=event=>{
  	event.preventDefault();

  	console.log(name,type,feedback);
  	let n=user_data.length+1;

  	let newHghlt={
  		id:n,
  		type,
  		feedback,
  		name
  	}

  	console.log(newHghlt)
  	let result=[...user_data,newHghlt]
  	console.log(result)

  	update(newHghlt);
  	setFlag(false);

  }

	return (
		<div className='New-item'>
	    <h2>Enter Details</h2>
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
	        <button type="submit">Add this highlight</button>
	        
	      </div>
	            
	    </form>
	   
	  </div>)

}

export default AddItem;