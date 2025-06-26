import { useSate } from "react";

const App = ()=>{
    const [searchText,setSearchText] = useState(()=>{
        return "arun";
    });
        console.log(searchText);

        const handleSearch = ()=>{
            setSearchText(else.targte.value)

        };
        return (
            <div>
            <input type="text" value={searchText} onKeyUp={handleSearch} />
            <h2>{searchText}</h2>
            </div>
        )
        
    };


export default App;