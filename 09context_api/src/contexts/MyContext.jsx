import { createContext, useContext} from 'react'
const userContext=createContext(null)
function useMyContext(){
    return useContext(userContext)
} 
export const UserContextProvider=userContext.Provider
export default useMyContext