const title = document.getElementById("greetings");

const handleUserName = (e) => {
  // console.log("typed");
  // console.log("----");
  // console.log(e);
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}!`;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(e);

  //   const input1 = e.target[0];
  //   const input2 = e.target[1];
  //   const input3 = e.target[2];
  //   console.log(input1.value, input2.value, input3.value);

  //   const username = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  // OR
  const username2 = e.target.usernameTemp.value;
  const email2 = e.target.baseEmail.value;
  const password2 = e.target.abcdPassword.value;

  //   console.log(username2);
  //   console.log( email2);
  //   console.log( password2);
  if (!email2.endsWith("@lpu.in")) {
    alert("Please user your lpu email id");
  } else {
    // call the API
    //send the data --> register the student
  }
};
