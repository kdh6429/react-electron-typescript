import * as React from "react";
import {useRecoilState} from "recoil";
import Counter from "../../store/counter";
import {Button} from "antd";

const HelloWorld: React.FC = () => {
  const [counter, setCounter] = useRecoilState(Counter)

  return (
    <>
      counter: {counter}
      <Button onClick={() => {
        setCounter(counter + 1)
      }}>+</Button>
      <Button onClick={() => {
        setCounter(counter - 1)
      }}>-</Button>
    </>
  )
}

export default HelloWorld
