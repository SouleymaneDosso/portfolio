import { createContext, useState } from "react"


export const ThemeContext = createContext()
export const ThemeToggle = ({children})=>{
    const [theme , setTheme] = useState('light')
    const toggleTheme =()=>{
        setTheme((prev)=>(prev === "dark" ? "light": "dark"))
    }
    return(
         <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
         </ThemeContext.Provider>
    )

}