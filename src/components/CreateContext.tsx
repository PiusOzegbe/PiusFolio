import { createContext, useState } from "react";

const HeaderContext = createContext({})

export const HeaderProvider = ({ children }: any) => {

  const [navColor, setNavColor] = useState("")

  return (
    <HeaderContext.Provider value={{navColor, setNavColor}} >
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContext