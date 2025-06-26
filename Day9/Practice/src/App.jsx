import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState(() => {
    const stored = localStorage.getItem("userList");
    return stored ? JSON.parse(stored) : [];
  });

  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const city = e.target.elements.city.value;

    if (name !== "" && city !== "") {
      const newEntry = { name, city };
      const updatedArr = [...arr, newEntry];
      setArr(updatedArr);
      localStorage.setItem("userList", JSON.stringify(updatedArr));
      e.target.reset();
    }
  };

  // 🗑️ Delete handler
  const handleDelete = (indexToDelete) => {
    const updatedArr = arr.filter((_, index) => index !== indexToDelete);
    setArr(updatedArr);
    localStorage.setItem("userList", JSON.stringify(updatedArr));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleAdd}>
        <input type="text" name="name" placeholder="Enter name" />
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          style={{ marginLeft: "10px" }}
        />
        <button type="submit" style={{ marginLeft: "10px" }}>
          submit
        </button>
      </form>

      <h3>User List:</h3>
      {arr.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {arr.map((item, index) => (
            <li key={index}>
              {item.name} from {item.city}{" "}
              <button onClick={() => handleDelete(index)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
