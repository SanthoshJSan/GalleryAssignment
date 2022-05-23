import {useState} from "react"
function importAll(r) {
  return r.keys().map(r);
}

let imageArray=[];
let count=0;
function Images(){
  
  let imageObj=require.context('../Images/', true, /\.jpe?g|\.png$/);
  imageArray=importAll(imageObj);
  imageArray=imageArray.map((item,index)=>item.default)
  let [Src,setSrc]=useState(imageArray[count])
  let [style,setStyle]=useState("none");
  let Style={position:"fixed",
    display:style,
    flexdirection: "row",
    alignitems:" center",
    top:0,
    left:0,
    right:0,
    bottom:0,
    height:"100%",
    }

  var prev=(e)=>{
    e.stopPropagation();
    if(count>0)
    setSrc(imageArray[--count]);
    if(count===-1)
       count=0;
  }
  var next=(e)=>{
    e.stopPropagation();
    if(count<imageArray.length-1)
    setSrc(imageArray[++count]);
    if(count===imageArray.length)
    count=imageArray.length-1;
  }

  var click=(event)=>{
    count=event.target.id;
    console.log(typeof count);
    setSrc(event.target.src)
    setStyle("flex");

  }
  var hide=()=>{
    setStyle("none");
  }

  return(
    <div id='root1'>
      {
      imageArray.map((item,index)=><img className="item " width="360px"  id={index} src={item} alt="info" onClick={click} />)
      }
      <div id="img" onClick={hide} style={Style}><button onClick={prev}>Previous</button><img className="item "  height='600px'  src={Src} alt="info" /><button onClick={next}>Next</button></div>
    </div>
  )

}
export default Images;