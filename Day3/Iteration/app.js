console.log("HELLO");

const arr=["cat","dog","elephant","tiger"];
// iteration
//1. for
// for(let i=0;i<arr.length;i++){
//     const elem = arr[i];
//     console.log(elem,i);
// }

//2.for in / for of        3.// for (let i of arr)
// for(let i in arr){
//     // iterate each one by one --- kimdly avoid
//     const elem = arr[i];
//     console.log(elem)
// }



const myFunc=()=>{ 
    console.log("hello")
}
arr.forEach(myFunc);