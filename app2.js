// // const heading = React.createElement("h1", { id: "heading" }, "hello world from pranav");

// // console.log(heading); // object

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);

// /*
//     <div id="parent">
//         <div id="child">
//             <h1></h1>
//             <h2></h2>
//         </div>
//     </div>
// */
// // import React from "react";
// // import ReactDOM from "react-dom/client";

// // const parent = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "i am h1 tag"),
// //     React.createElement("h2", {}, "i am h2 tag"),
// //   ])
// // );

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(parent);

// import React from "react";
// import ReactDOM from "react-dom/client";

// // core react
// const heading = React.createElement("h1", { id: "heading" }, "Namaste react using react");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(heading);

// // jsx is not a html in js
// // it is html or xml like syntax
// // React Element
// const jsxHeading = <h1 id="heading"> Namaste React Using JSX</h1>;
// console.log(jsxHeading);
// //root.render(jsxHeading);

// // Functional Component use is rare
// const HeadingComponent = () => {
//   return <h1>Hello</h1>;
// };

// // functional component
// const HeadingComponent1 = () => <h1>performing component composition</h1>;

// const ele = <span>Adding Element to component</span>;
// const ele1 = <h1>Element to Element {ele}</h1>;
// // component composition
// const HeadingComponent2 = () => (
//   <div>
//     <HeadingComponent1 />
//     <HeadingComponent1> </HeadingComponent1>
//     {HeadingComponent1()}
//     {1234 + 655}
//     {ele1}
//     <h1 className="heading">Hello From Functional Component</h1>
//   </div>
// );
// root.render(<HeadingComponent2 />);
