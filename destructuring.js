const TEMP={
    today:{min:25,max:30,avg:27.5},
    tomorrow:{min:20,max:28,avg:24}
};
function getavg(temp){
    "use strict";
    const {today:{avg:avgtdy}}=temp;
    return avgtdy
}
console.log(getavg(TEMP));
