import { useReducer } from 'react';
import { initialState } from '../constants';
import { GlobalStateContext } from "./context";
import { reducer } from './reducer';

export const GlobalStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    )
}
