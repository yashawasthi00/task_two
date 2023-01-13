import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';

function App() {
  const [data,setData]=useState([]);
  const [clicked,setClicked]=useState(false);


  const getData=async()=>
  {
    const information= await axios.get("https://restcountries.com/v2/all");
    setData(information.data)
  }
    
  const clickedAsc=async ()=>
  {
    const information = data 
    information.sort( compare );

      function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name){
          return 1;
        }
        return 0;
      }
      console.log(information)
      setData(information);
  }

  const clickedDsc=async()=>
  {
    const information = data 
    information.sort( compare );


    function compare( a, b ) {
        if ( a.name > b.name ){
          return -1;
        }
        if ( a.name < b.name){
          return 1;
        }
        return 0;
      }

    //   data.sort( compare );
    console.log(information)
    setData(information);
    console.log(data)
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
              <div className="dropdown">
            <button onClick={()=>{
              setClicked(!clicked)
            }} className="dropbtn">Sort based on name</button>
            {clicked?<div id="myDropdown" className="dropdown-content">
              <a onClick={clickedAsc}>In Ascending</a>
              <a onClick={clickedDsc}>In Descending</a>
            </div>:null}
          </div>

      <div className="row" id="country-box">
        {data.map((item,key)=>{
          return  <Card data={item} key={key}/>
        })}
        </div>
    </div>
  );
}

export default App;
