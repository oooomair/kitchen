import { createContext } from "react";
import data from './data'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    return(
        <GlobalContext.Provider value={data}>
        {children}
      </GlobalContext.Provider>
    )
}