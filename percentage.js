var per;
function result(per){
  if(per>85){
    return "Distinction!";
  }
  else if(per<85&& per>65){
    return "First Class!";
  }
  else if(per<65&&per>35){
    return "Second Class!";
  }
  else{
   return "fail";
  }
}
  console.log(result(90));
