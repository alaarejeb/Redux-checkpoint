import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {add, check} from './redux/slices/todoSlice'

function App() {
  const dispatch=useDispatch()
  const [description,setdesc]=useState()
  const todos=useSelector(state=>state.todos)
  return (
    <div className="App">
      <input type='text' onChange={(e)=>setdesc(e.target.value)}></input>
      <button onClick={()=>dispatch(add(description))}>Add new task</button>
      {todos.map((el)=><div>
        <h1>{el.description}</h1>
        <input type="checkbox" onChange={()=>dispatch(check(el.id))}/>
      </div>)}
    </div>
  );
}

export default App;
