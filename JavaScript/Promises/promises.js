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

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Task 2 done!");
        resolve();
    },2000)
}).then(function(){
    console.log("Async 2 resolved!")
})