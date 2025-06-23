fetch("https://dummyjson.com/products")
  .then((response) => {
    console.log("response:", response);
    return response.json(); // return the promise directly
  })
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {
    alert("Unable to get products: " + err.message);
  });
