// console.log("Hello World");
// const root = document.getElementById("root");

// const ul = document.createElement("ul");

// const li1 = document.createElement("li");
// li1.textContent = "Item 1";

// const li2 = document.createElement("li");
// li2.textContent = "Item 2";

// ul.appendChild(li1);
// ul.appendChild(li2);

// root.appendChild(ul);

//------------------------------------------------------------------------------------------------
// const item1 = React.createElement("li", {}, "item1");
// const item2 = React.createElement("li", {}, "item2");

// const ul = React.createElement("ul", {}, [item1, item2]);

// const rootElem = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(rootElem);

// reactRoot.render(ul );

//--------------------------------------------------------------------------=-----------------

const list = (
  <div>
    <h2>Ankit</h2>
    <p>Ankit</p>

    <ul>
      <li>Helo</li>
      <li>helo from root</li>
    </ul>
  </div>
);

const rootElem = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);
