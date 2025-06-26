import { useState, useEffect } from "react";

const App = () => {
  // Load fruits from localStorage (or default list if empty)
  const [fruits, setFruits] = useState(() => {
    const storedFruits = localStorage.getItem("fruitList");
    return storedFruits
      ? JSON.parse(storedFruits)
      : [
          { name: "Kiwi", color: "green", price: 600 },
          { name: "Banana", color: "yellow", price: 40 },
          { name: "Apple", color: "red", price: 200 },
          { name: "Mango", color: "yellow", price: 150 },
        ];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [newPrice, setNewPrice] = useState("");

  // Save to localStorage whenever fruits change
  useEffect(() => {
    localStorage.setItem("fruitList", JSON.stringify(fruits));
  }, [fruits]);

  const handleEdit = (index, currentPrice) => {
    setEditIndex(index);
    setNewPrice(currentPrice);
  };

  const handleSave = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].price = Number(newPrice);
    setFruits(updatedFruits);
    setEditIndex(null);
    setNewPrice("");
  };

  return (
    <div>
      <h2>Fruit List with Editable Price</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <span>
              {fruit.name} - {fruit.color} - ₹
              {editIndex === index ? (
                <>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)}>Save</button>
                </>
              ) : (
                <>
                  {fruit.price}
                  <button
                    onClick={() => handleEdit(index, fruit.price)}
                    style={{ marginLeft: "10px" }}
                  >
                    Edit
                  </button>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
