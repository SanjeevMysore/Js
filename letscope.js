function scope(){
    let a="Hello!"
    if(true){
        let a="Hi!"
        console.log("Message is:",a)
    }
    console.log("Message is:",a)
}
scope();
