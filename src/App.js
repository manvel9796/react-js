import { useState } from "react";
import MyButton from './components/MyButton';

function App() {
  const[count,setCount] = useState(12)

const[test,setTest]= useState(1)
  const avelacnel = ()=>{
    setCount(count + 1)
  
}
const tpel = () =>{
  setTest(test + 1)

}
 
  const pakasacnrel = ()=>{
    setCount(count - 1)
  }
  return (
    <div>
      <MyButton title={"+"} handleClik={avelacnel} />
      <MyButton title={"count"} handleClik={avelacnel} />
      <MyButton title={"tiv"} handleClik={tpel} />
      <MyButton title={"-"} handleClik={pakasacnrel} />
      {count}
      {/* <Myform/> */}
      <p> </p>
      {test}
    </div>
  );
}
export default App;
