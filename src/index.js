import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Images from './Images';
import Videos from './Videos';
import {useState} from 'react';



function App(){
 const [data,setData]=useState("To Videos");
 const [style1,setStyle1]=useState({display:"block"});
 const [style2,setStyle2]=useState({display:"none"});
  const click=()=>{
    (data==="To Videos")?setData("To Images"):setData("To Videos");
    (style1.display==="block")?setStyle1({display:"none"}):setStyle1({display:"block"});
    (style2.display==="block")?setStyle2({display:"none"}):setStyle2({display:"block"});
  }
  
  return(
    <div >
      <div className="fixed">
    <h1>Gallery</h1>
    <button id="toggleButton" className="center" onClick={click}>{data}</button>
    </div>
    <div style={style1}>
    <Images/></div>
    <div style={style2}>
    <Videos/></div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

