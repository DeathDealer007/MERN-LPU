//  let juice=50;
//  let gstonjuice = 0.1;
//  let fries=70;
//  let gstonfood= 0.05;

//  let juiceBillAmount= juice+juice*gstonjuice;
//  let foodbill=fries+fries*gstonfood;
//  let total=juiceBillAmount+foodbill;
//  console.log(total);

// -----------------------------------------------
// console.log("Start");
// function calculateJuiceBillAmount(){
//     let juice=50;
//     let gstonjuice = 0.1;
//     let juiceBillAmount= juice+juice*gstonjuice;
//     console.log(juiceBillAmount);
// }
// console.log("MID");
// calculateJuiceBillAmount();
// console.log("END");
// ---------------------------------------------------

// function calculateJuiceBillAmount(juice){
//     let gstonjuice = 0.1;
//     let juiceBillAmount= juice+juice*gstonjuice;
//     console.log(juiceBillAmount);
// }
// function calculateFoodBillAmount(fries){
//     let gstonfood = 0.05;
//     let juiceBillAmount= fries+fries*gstonfood;
//     console.log(juiceBillAmount);
// }
// calculateJuiceBillAmount(60);
// calculateJuiceBillAmount(50);
// calculateFoodBillAmount(120);

// --------------------------------------------
// function printBillAmount(name, amount){
//     console.log(name);
//     console.log(amount + " $");
//     console.log(".......")
// }
// function calculateBillAmount(price,gst){
//     let billAmount=price+price*gst;
//     return billAmount;
// }
    
// const res1=calculateBillAmount(60,0.1);
// printBillAmount("Mango Juice",res1);
// const res2=calculateBillAmount(120,0.05);
// printBillAmount("fries",res2);
    // -----------------------------------------------------------------

// const printBillAmount= function (name, amount){
//     console.log(name);
//     console.log(amount + " $");
//     console.log(".......")
// }
// const calculateBillAmount= function (price,gst){
//     let billAmount=price+price*gst;
//     return billAmount;
// }
    
// const res1=calculateBillAmount(60,0.1);
// printBillAmount("Mango Juice",res1);
// const res2=calculateBillAmount(120,0.05);
// printBillAmount("fries",res2);
// const res3=calculateBillAmount(220,0.025);
// printBillAmount("apple",res3);
    // ----------------------------------------------------------------

const printBillAmount= function (name, amount){
    console.log(name);
    console.log(amount + " $");
    console.log(".......")
}
const calculateBillAmount= function (price,gst){
    let billAmount=price+price*gst;
    return billAmount;
}
    
const res1=calculateBillAmount(60,0.1);
printBillAmount("Mango Juice",res1);
const res2=calculateBillAmount(120,0.05);
printBillAmount("fries",res2);
const res3=calculateBillAmount(220,0.025);
printBillAmount("apple",res3);