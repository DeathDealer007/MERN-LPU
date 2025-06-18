// const arr1 = ["tata","mahindra","suzuki","hyundai"];
// const arr2 = ["kia","byd","mitsubishi"];
// console.log(arr1);

//Read 
////1.
// const company = arr1[1];
// console.log(company);

// // 2.
// const ([a,b,c]) = arr1;
// console.log(a,b )

// ------------------------------------------------------------
// // Add
// const arr1 = ["tata","mahindra","suzuki","hyundai"];

// arr1[10]="Honda";
// push
// ---------------------------------------------------------------------------------
// const arr = ["tata","mahindra","suzuki","hyundai"];
// arr.splice(1,2,"kia","nyd","honda");---> removing nd adding eleemnt
// arr.splice(1,1);--->deleting element
// arr.splice(1,0); ---> adding new eleemnt
// console.log("arr: ", arr);
// //-------------------------------------------------------------------------------------------

// const arr = ["tata","mahindra","suzuki","hyundai"];
// console.log(arr.indexOf("suzuki"));

// const arr =[{name:"Akhilesh", city: "Delhi"},
//     {name: "Abhinav", city: "Kanpur"},
//     {name: "Sumedh",city: "Mumbai"}
// ]

// console.log(arr.indexOf(name: "Abhinav", city: "Kanpur"))

// ({name:"Raj"} == {name:"Raj"})---> false
//const person = {name: "Raj"} 
// person == person ---> true   

//const pr1={name: "raj"}
//const per2={...pr1};
//pr1==per2----> false


// arr.includes gives true false and is better than arr.indexOf as indexOf gives the index of the element

//-------------------------------------------------------------------------------------------------
// const myFunc = (a,b,c,d) => {
//     if (a=="mn") return true;
//     else return false;
// //     console.log(a,b,c,d)
//  }
// const arr=["ab","xy","mn","ab","pq"]


// const elem = arr.find(myFunc)

// -----------------------------------------------------------------

// const arr =[{name:"Akhilesh", city: "Delhi"},
//     {name: "Abhinav", city: "Kanpur"},
//     {name: "Sumedh",city: "Mumbai"}
// ];

// const myFunc = (a) =>{
//     if (a.name ==="Abhinav") return true;
//     return false;
// };

// const ans = arr.find(myFunc);
// console.log(ans)
    
//----------------------------------------------------------------------------------------
const arr =[{name:"Akhilesh", city: "Delhi",score: 33},
    {name: "Abhinav", city: "Kanpur",score: 24},
    {name: "Sumedh",city: "Mumbai",score: 42}
];

const myFunc =(elem) =>{
    if(elem.score<25){
        return {...elem, remarks: "fail"};

    }else{
        return {...elem, remarks:"pass"}
    }
};

const resArr = arr.map(myFunc);
console.log("👉resArr: ", resArr);