// // re-rendering --> re-run the function

// // import { useState } from "react";

// // component is re-rendered only when the state change OR props change

// // state variables are given to use by react
// // if the value the state variable change --> state of the component has changed
// // const App = () => {
// //     // let searchText = "Anuj";
// //     const [monitor, remote] = useState();

// //     const handleSearch = (e) => {
      
// //         // searchText = e.target.value;
// //         // console.log(searchText);
// //         remote(e.target.value); // Noted!
// //         console.log(monitor);
// //     };

// //     return (
// //         <div>
// //             <input type="text" onKeyUp={handleSearch} />
// //             {/* <h3>{searchText}</h3> */}
// //             <h3>{monitor}</h3>
// //         </div>
// //     );
// // };


// // export default App;
// //--------------------------------------------------------------------


// // import { useState } from "react";

// // const App = () => {
    
// //     const [monitor, remote] = useState(() => {
// //      const val = localStorage.setItem("counter-value");
// //         if (val){
// //           return parseInt (val);
// //         } else{
// //         return 0;
// //       }
// //     )};
// // console.log(monitor)
  
      

// //     const handleClick = () => {
     
// //       console.log(monitor)
// //       remote ((prev)=>{
// //         const newValue = prev + 1;
// //         localStorage.setItem("counter-value", newValue);
// //         return newValue
        
// //       });

// //       handleDecrement
    
      
// //     };

  

// //     return (
// //         <div>
// //             <button  onClick={handleClick} >click me</button>
// //             {/* <h3>{searchText}</h3> */}
// //             <h3>{monitor}</h3>
// //         </div>
// //     );
// // };


// // export default App;

// import { useState } from "react";

// const App = () => {
//   // Load from localStorage initially
//   const [counter, setCounter] = useState(() => {
//     const val = localStorage.getItem("counter-value");
//     return val ? parseInt(val, 10) : 0;
//   });

//   // Update localStorage and state together
//   const updateCounter = (newValue) => {
//     setCounter(newValue);
//     localStorage.setItem("counter-value", newValue);
//   };

//   const handleIncrement = () => {
//     updateCounter(counter + 1);
//   };

//   const handleDecrement = () => {
//     updateCounter(counter - 1);
//   };

//   const handleReset = () => {
//     updateCounter(0);
//   };

//   return (
//     <div >
//       <h2>Counter: {counter}</h2>
//       <button onClick={handleIncrement}>Increment</button>{" "}
//       <button onClick={handleDecrement}>Decrement</button>{" "}
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";

// const App = () => {
//   // Load from localStorage on initial render
//   const [searchText, setSearchText] = useState(() => {
//     return localStorage.getItem("searchText") || "arun";
//   });

//   // Update state and localStorage when input changes
//   const handleSearch = (e) => {
//     const val = e.target.value;
//     setSearchText(val);
//     localStorage.setItem("searchText", val);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchText}
//         onChange={handleSearch}
//       />
//       <h2>{searchText}</h2>
//     </div>
//   );
// };

// export default App;
import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState(["kiwi", "banana"]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      setArr((prev) => [...prev, inputText]);
      setInputText(""); // clear input after adding
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter fruit name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {arr.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


