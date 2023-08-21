import { useEffect, useState } from 'react'

function UseState_UseEffect() {
   const [count, setCount] = useState(0)
   const [number, setnumber] = useState(0)
   useEffect(() => {
      // Update the document title using count += 1
      document.title = `You clicked count ${count} times`;
      console.log('useEffect ของ count += 1\nมีการทำงาน');
      console.log('count =', count);
      //ถ้าไม่ set depandencyList จะทำให้ useEffect นี้ทำงานอย่างไม่จำเป็นเพิ่ม 1 ครั้งเมื่อ
      //function อื่นใน component นี้ทำงาน
    }); 
    useEffect(() => {
      // Update the document title using number += 2
      document.title = `You clicked number ${number} times`;
      console.log('number =', number);
    },[number]);
    console.log('1-ทำงานก่อน useEffect -1');
   return (
      <>
         <h1>Vite + React</h1>
         <p>Now Count : {count}</p>
         <p>Now Count : {number}</p>
         <div>
            <button onClick={() => setCount((count) => count + 1)}>count += 1 </button>
            <button onClick={() => setnumber((aaa) => aaa + 2)}>number += 2</button>
         </div>
      </>
   )
}
export default UseState_UseEffect