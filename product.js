function mul(arr){
    var product=1;
    for(var i=0;i < arr.length;i++){
        for(var j=0;j < arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product=mul([[1,2],[5,7],[6,8,9]]);
console.log(product)
