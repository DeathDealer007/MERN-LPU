//re-rendering ---> re run the fn
//component

import { useState } from "react";

const SearchBox = ()=>{
    //let searchText = "Anuj";
    const [monitor, remote] = useState();

    const handleSerach = (e)=>{
        // searchText= e.target.value;
        // console.log(e.target.value);
        remote(e.target.value);// noted!


    };




    return (
        <div>
        <input type="text" onKeyUp={handleSerach} />
        <h3>{monitor}</h3>

        </div>
    )

};

export { SearchBox }