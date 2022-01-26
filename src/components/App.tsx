import * as React from 'react'
import {Button, message} from 'antd'
import './App.less'
import {RecoilRoot} from "recoil";
import HelloWorld from "./HelloWorld";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className='app flex-column'>
        electron !
        <Button type='primary' onClick={() => message.success('React / Antd / Electron!')}>Antd</Button>
        <HelloWorld/>
      </div>
    </RecoilRoot>
  )
}

export default App
