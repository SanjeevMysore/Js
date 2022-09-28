const result = {
    success : ["a","b","c"],
    failure : ["d","e","f"],
    skip : ["g","h","i"]
};
function list(arr){
    const resultdisp=[];
        for(let i=0; i < arr.length; i++){
            resultdisp.push(`<li class="tw">${arr[i]}</li>`) 
        }
    return resultdisp;
}
const resultdisp=list(result.skip);
console.log(resultdisp);
