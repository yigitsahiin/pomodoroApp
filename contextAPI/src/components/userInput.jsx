import { useState } from 'react';
import { useGlobalStateContext } from "./store/globalState/context";

export const UserInput = () => {
    const {state, dispatch} = useGlobalStateContext();
    const [counter, setCounter] = useState(0);
  
    const handleInputChange = (e) => setCounter(parseInt(e.target.value));
  
    const handleLogin = () => {
      if (state.isLoggedIn)
        dispatch({type: "logoutUser", erhan: "yaşar"})
      else dispatch({type: "loginUser"})
    }

    return (
        <div style={{display: 'flex', flexDirection: "column", gap: '1rem'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
            {state.counter}
            <input type="number" value={counter} onChange={handleInputChange}></input>
            <button onClick={() => dispatch({type: "Increment", payload: counter})}>Increment</button>
            <button onClick={() => dispatch({type: "Decrement", payload: counter})}>Decrement</button>
            </div>
            <button onClick={handleLogin}>{state.isLoggedIn ? "Logout" : 'Login'}</button>
        </div>
    )
}
