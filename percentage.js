var per;
function result(per){
  if(per>85){
    return "Distinction!";
  }
  if(per<85&& per>65){
    return "First Class!";
  }
  if(per<65&&per>35){
    return "Second Class!";
  }
   return "fail";
}
  console.log(result(90));
