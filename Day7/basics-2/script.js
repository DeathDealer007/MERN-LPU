// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const Card1 = (title, desc) => {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       <p>{desc}</p>
//     </div>
//   );
// };

// const Container = (
//   <div>
//     {Card1("Hello ", "description1")}
//     {Card1("Notice", "description2")}
//     {Card1("Warnimg..", "description3")}
//   </div>
// );

// reactRoot.render(Container);

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card1 = (obj) => {
  return (
    <div className="card">
      <h1>{obj.title}</h1>
      <p>desc</p>
    </div>
  );
};

const Card2 = (
  <div className="card">
    <h1>Done---</h1>
    <p>descriptions</p>
  </div>
);

const Container = (
  <div>
    {Card1("Hello ", "description1")}
    <Card1 title="Notice"></Card1>
    {Card1("Warnimg..", "description3")}
    {Card2}
  </div>
);

reactRoot.render(Container);
