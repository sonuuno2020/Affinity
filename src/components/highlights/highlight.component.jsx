import React,{useState} from 'react';
import EditItem from  './../Edit/edit.component';
import EditImage from './../../assets/pinceau.svg';
import './highlight.style.scss';

const HighLight = ({ item: { id,type,feedback,name},remove:remove,setIsWrt:setIsWrt,flag:flag }) => {
  

  function fun(){
    
    setIsWrt(id)
    
    
  }
  return(
  <div className='highlight-item' >
    
    <div key={id} className='item-details'>
      {
        id<5?<label className="type">{type}</label>:null
      }
      
      <span className="feedback">{feedback}</span>
      <span className='name'>{name}</span>
      
    </div>
    {
      !flag?<div className="icon">
      <div className="remove" onClick={()=>{
        
          remove(id)
        
      }}> &#10005;
      </div>
      <div className="write" onClick={fun}>
        {<img src={EditImage} height='25px' width='20px'/>}
      </div>
      
    </div>
    :null
    }
    
    

  </div>
  )
}

export default HighLight;
