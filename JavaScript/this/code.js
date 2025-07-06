// // console.log(this) // Window object

// function x (){
//     console.log(this);
// }

// const obj = {
//     a : 10,
//     x : function(){
//         console.log(this);
//     }
// }

// obj.x()//{ a: 10, x: [Function: x] }

// const student = {
//     name : 'Nabin',
//     printname : function (){
//         console.log(this.name);
//     }
// }

// console.log(student.printname);

// const student2 = {
//     name : 'GodWin',
// }

// student.printname.call(student2)
//Is there any way I can use the printname fn of the student object to use it in student 2 
const obj = {
    a : 10,
    x : ()=>{
        console.log(this)
    },
}
obj.x();// {}

