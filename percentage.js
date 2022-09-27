var array=["Distinction!","First Class!","Second Class!","fail"]
var per;
function result(per){
  if(per>85){
    return array[0];
  }
  else if(per<85&& per>65){
    return array[1];
  }
  else if(per<65&&per>35){
    return array[2];
  }
  else{
   return array[3];
  }
}
  console.log(result(90));
