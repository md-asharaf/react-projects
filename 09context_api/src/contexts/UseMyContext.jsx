import { createContext, useContext} from 'react'
const userContext=createContext(null)
function UseMyContext(){
    return useContext(userContext)
} 
export const UserContextProvider=userContext.Provider
export default UseMyContext