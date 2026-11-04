// import Button from "./Button";

function List({items}){
return(
    <>
    <ul>
        {items.map((item)=>(
        <li>{item}</li>
        ))  }
    </ul>
    {/* <Button btnText={btnName}/> */}
    <p className="text-blue-900 text-5xl">for you</p>
    </>
);
}
export default List


// function List({items,btnName}){
// return(
//     <>
//     <ul>
//         {items.map((items)=>(
//         <li>{items}</li>
//         ))  }
//     </ul>
//     {/* <Button btnText={btnName}/> */}
//     </>
// );
// }
// export default List
