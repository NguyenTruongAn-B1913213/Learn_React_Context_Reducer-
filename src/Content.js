//1. useEffect(callback)
// callback mỗi khi compent re-render
// callback sau khi compent thêm element vào Dom
//2. useEffect(callback,[])
// chỉ gọi callback 1 lần sau khi compenment mounted
//3. useEffect(callback,[deps])
// callback sẽ đc gọi lại mỗi khi des thay đổi
//------
// 1. callback luôn đc gọi sau khi component mounted
// import { useState, useEffect } from "react";
// const tabs = ["posts", "comments", "albums"];
// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowGoToTop(window.scrollY >= 200);
//     };
//     window.addEventListener("scroll", handleScroll);
//     console.log("addEventListener");
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       console.log("removeEventListener");
//     };
//   }, []);
//   //   useEffect(() => {
//   //     const goToTop = () => {
//   //       window.screenY = 0;
//   //     };
//   //   });
//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setType(tab)}
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   backgroundColor: "#333",
//                 }
//               : {}
//           }
//         >
//           {tab}
//         </button>
//       ))}

// import { useEffect, useState } from "react";

//       <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}

//         {showGoToTop && (
//           <button
//             style={{
//               position: "fixed",
//               right: 20,
//               bottom: 20,
//             }}
//           >
//             Go to top
//           </button>
//         )}
//       </ul>
//     </div>
//   );
// }
// clearup function được gọi trước khi comment unmouted
// clearup function được gọi trước khi callback được gọi
// function Content() {
// const [count, setcount] = useState(1);
// useEffect(() => {
//   console.log("Mounted or Re-render");
//   return () => {
//     console.log(`clear up `);
//   };
// }, [count]);

//   return (
//     <div>
//       <h1> {count}</h1>
//       <button onClick={() => setcount(count + 1)}> Click me</button>
//     </div>
//   );
// }
// function Content() {
//   const [img, setImg] = useState();
//   useEffect(() => {
//     return () => {
//       img && URL.revokeObjectURL(img.preview);
//     };
//   }, [img]);
//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setImg(file);
//   };
//   return (
//     <div>
//       <input type="file" onChange={handlePreviewAvatar}></input>
//       {img && <img src={img.preview} alt="" width="80%" />}
//     </div>
//   );
// }
import Paragraph from "./Paragraph";
function Content() {
  return <Paragraph />;
}
export default Content;
