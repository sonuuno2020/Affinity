import React,{useState} from 'react';
import './addbucket.style.scss';
import FormInput from './../form-input/form-input.component';

const AddBucket=({update})=>{
	const [bucketType,setBuketType] = useState('');

  const handleChange=event=>{
    const {name,value}=event.target;
    setBuketType(value)
  }

  const handleSubmit=event=>{
  	event.preventDefault();
  	
  	update(bucketType)
  }

	return(
		<div className="addbucket">
			<form className="row" onSubmit={handleSubmit}>
				 <h2>Enter Bucket name</h2>
	      <FormInput name="name" 
	      label="Name" 
	      type="text"
	      handleChange={handleChange} 
	
	      required />

	      
	      <div className="button">
	        <button type="submit">Add to Buckets</button>
	        
	      </div>
	            
	    </form>
			
		</div>

		)
}

export default AddBucket;