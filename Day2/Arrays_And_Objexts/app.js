// const cse018 = {
//     name:"Virat Kohli",
//     team:"RCB",
//     bloodGroup: "o-"
// };
// console.log("cse018: ",cse018);

// //Read the value of property
// const studentName = cse018.name;
// console.log("StudentName: ", studentName);

// //Update the value of property
// cse018.bloodGroup = "A+";

// // Add a key-value pair
// cse018.college = "LPU";

// //Delete the key-value pair
// delete cse018.team;

// console.log("cse018: ",cse018);
// -------------------------------------------------------------

// const person ={
//     name:'Ankit',
//     height:1.74, //meters
//     weight: 58,
//     college: 'LPU',
//     rollNumber: '08',
//     getBMI: function (){
//         const bmi = this.weight/(this.height*this.height); // height nd weigth
//         console.log(`BMI for ${this.name} is ${bmi}`);
//     },


// };

// person.getBMI();
 
//-----------------------------------Dynamic value access ---------------------------------------------------------

// const allkeys = Object.keys(person);
// console.log(allkeys)
// const allvalues = Object.values(person);
// console.log(allvalues)
// const allentries = Object.entries(person);
// console.log(allentries)


// const whichkey = prompt("which key you want to see?");
// console.log(person[whichkey]);

// ----------------------------------------de structureing------------------------------------------------------

// const person1 ={
//     name:'Ankit',
//     height:1.74, //meters
//     weight: 58,
//     college: 'LPU',
//     rollNumber: '08',
// }

// const person2=person1;

// // console.log("person1",person1);
// // console.log("person2", person2);
// const {weight, college} = person1;
// console.log("👉 ", weight, college);

//-----------------------------------------------------------

const person1 = {
    name:'Ankit',
    height:1.74, //meters
    weight: 58,
    college: 'LPU',
    rollNumber: '08',
    mark () maths 42,
    EVS 23,
}
const person2 = {...person1};

person2.name = "Rajesh";
person2.marks.maths = 49;

console.log("person1",person1)
console.log("person2",person2)