import { useContext ,createContext} from 'react'
const context=createContext(null)
export default function UseContext() {
  return useContext(context)
}
export const ContextProvider=context.Provider
