//BOM- browser object model
//DOM- document object model

// //console.log(window.document);
// console.dir(document.children[0].children[1].children[0]);
//[----------------------------------------------------

//1. document.getEleentsByTagName -- ->{ } iterable (html collection)

// const headings = document.getElementsByTagName("h3");
// console.log("headings: ", headings);

// const header = document.getElementsByTagName("header");
// console.log("header: ", header);

// headings[0].innerText = "Hello Rishu";
// headings[1].innerText = "hello bishu";

// 2. getelement by classname

// const headings = document.getElementsByClassName("card");
// console.log("class:", headings);

// headings[]

// const text = document.getElementById("text-1");
// console.log(text);

// text.style.backgroundColor = "orange";

//------------------------query selector all important
//----------------------------

// const titles = document.querySelectorAll("h3");

// const textBrownElements = document.querySelectorAll(".text-brown");

// const textPara = document.querySelectorAll("#text-1");

//------------------------------------------
// -------- queryselector
// const titles = document.querySelector("h3");
// console.log(titles);

// const textBrownElements = document.querySelector(".text-brown");
// console.log(textBrownElements);

// const textPara = document.querySelector("#text-1");
// console.log(textPara);
