
function importAll(r) {
  return r.keys().map(r);
}

let imageArray=[];

function Images(){
  
  let imageObj=require.context('../Images/', true, /\.jpe?g|\.png$/);
  imageArray=importAll(imageObj);
  imageArray=imageArray.map((item,index)=>item.default)

  return(
    <div id='root1'>{
      imageArray.map((item,index)=><img className="item" height='200px' key={index} src={item} alt="info" />)
    }
    
</div>
  )

}
export default Images;