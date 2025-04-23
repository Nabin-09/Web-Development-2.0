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


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
       resolve( {username : "data" , email : "nunu@example,com"});
    }, 2000);
})
promiseThree.then(function(user){
    console.log(user)//passing values through sending parameters to resolve
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Nabin" , password : "FunkyDog"});
        }
        else{
            reject("ERROR NIGGA!")
        }
    },1000)
})
//Very important then() chaining
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('The Promise was either resolved or rejected!'))


