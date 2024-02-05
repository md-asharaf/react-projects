import { useContext ,createContext} from 'react'
const context=createContext(null)
export default function useThemeContext() {
  return useContext(context)
}
export const ThemeContextProvider=context.Provider
