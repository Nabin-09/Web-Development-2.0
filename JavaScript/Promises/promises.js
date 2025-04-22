const promiseOne = new Promise(function(resolve , reject){
    //Do any async task like DB , Network calls , crypto
    setTimeout(function(){
        console.log('Async done!');
        resolve();
    },2000)
})
promiseOne.then(function(){//this callback automatically receives a value
    console.log("Promise consumed!");
})