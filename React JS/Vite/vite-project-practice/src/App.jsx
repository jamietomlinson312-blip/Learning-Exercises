import { useState } from 'react'
import { AdvancedJobCounter } from './new-component.jsx'
import { SomeText } from './new-component.jsx'
import { DynamicForm } from './new-component.jsx'
import { BotListManager } from './new-component.jsx'
import './App.css'

function App() {
return (<>
  <SomeText />
  <AdvancedJobCounter />
  <DynamicForm />
  <BotListManager />
</>)
}
export default App
