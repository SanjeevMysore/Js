function freeze(){
    "use strict";
    const OBJ={
        "Name":"Sanjeev",
    };
    Object.freeze(OBJ)
    try{
        OBJ.Name="Dhruva";
    }catch( ex ){
        console.log(ex)
    }
    return "Original Name: " + OBJ.Name;
}
const val=freeze();
console.log(val);
