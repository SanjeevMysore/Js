const array1=["A","B","C","D","E"]
let array2;
(function(){
 array2=[...array1];
 array1[2]="R"
})();
console.log(array1)
console.log(array2)
