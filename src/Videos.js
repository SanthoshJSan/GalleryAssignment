
function importAll(r) {
    return r.keys().map(r);
  }
  
  let videoArray=[];
  
  function Videos(){
    
    let videoObj=require.context('../Videos/', true, /\.avi|\.mp4|\.mpg$/);
    videoArray=importAll(videoObj);
    videoArray=videoArray.map((item,index)=>item.default)
  
    return(
        <div id='root1'>{
        videoArray.map((item,index)=><video className="item" key={index} src={item} width="310px" controls/>)
        
      }
    </div>
   
    )}
  export default Videos;