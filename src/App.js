import React,{useState,useEffect} from "react";
import {Switch,Route} from 'react-router-dom';

import USER_DATA from './data';
import HomePage from './pages/homepage/homepage.component';
import GroupHighlight from './pages/group-highlights/group-highlight.component';


import Header from "./components/header/header.component";

function App() {
  const [bucket,setBucket]=useState(["Services","Risk"]);
  const [users_data,setUserData]=useState(USER_DATA);



  useEffect(()=>{
     const getData = () => {

      const localBucket=JSON.parse(localStorage.getItem('bucket'));
      const localUsers=JSON.parse(localStorage.getItem('users_data'));
      console.log(localBucket,localUsers)
      localBucket?setBucket(localBucket):setBucket(["Services","Risk"])
      localUsers?setUserData(localUsers):setUserData(USER_DATA)
     
    }
    getData();

      
   
  },[])
  useEffect(()=>{
      localStorage.setItem('bucket', JSON.stringify(bucket));
  },[bucket])
  useEffect(()=>{
      localStorage.setItem('users_data', JSON.stringify(users_data));
  },[users_data])

 function editUpdate(newHghlt){
    let editUser=users_data.filter(i=>i.id!==newHghlt.id);
    setUserData([...editUser,newHghlt]);
  }

 function update(newHghlt){
    setUserData([...users_data,newHghlt]);
  } 

  function remove(id){
    alert("This highlight will be deleted")
    let final=users_data;
   
    let updatedUser = users_data.filter(i => i.id !== id)
    console.log(final)
    setUserData(updatedUser)
  }
 
  return (
    <div>
    
      <Header bucket={bucket} setBucket={setBucket}/>
      <Switch>
          <Route exact path='/group' render={()=><GroupHighlight 
            bucket={bucket} setBucket={setBucket}
             data={users_data} setData={setUserData} />
           } />  
          <Route path='/' render={()=><HomePage 
            bucket={bucket} setBucket={setBucket}
             data={users_data} setData={setUserData} update={update} editUpdate={editUpdate}remove={remove}/>
           } />
         

        </Switch>
     
          
    </div>
  );
}

export default App;
