
// import MyButton from "./assets/components/Button";

// function Parent() {
//   return (
//     <div>
//       <MyButton
//         text="Login"
//         bgColor="blue"
//         textColor="white"
//         padding="12px 25px"
//         borderRadius="90px"
//       />
//     </div>
//   );
// }

// export default Parent;


// import { useState } from "react";
// import {Button} from "./assets/components/Button";

// function App(){
//   const[count,setcount]=useState(5);
//   const increment=()=>{
//     if(count!=10)
//     setcount(count+1);
//   }
//    const decrement=()=>{
//      if(count!=0)
//     setcount(count-1);
//   }
//     return(
//     <>
//     counting.....{count};
//     <br />
//     <Button/>
//     <button btntxt="Add" value={increment} />
//     <br></br>
//     <button btntxt="Delete" value={decrement} />
//     </>
//   )
// }
// export default App
 


function App() {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white">
      <h1 className="text-2xl font-bold text-yellow-400">
        MyWebsite
      </h1>

      <ul className="flex items-center gap-8">
        <li>
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-yellow-400">
            About
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-yellow-400">
            Services
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-yellow-400">
            Contact
          </a>
        </li>
      </ul>

      <button className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-300">
        Login
      </button>
    </nav>
  )
}

export default App
