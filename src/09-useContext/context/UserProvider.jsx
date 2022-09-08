
//Functional component

import { useState } from "react"
import { UserContext } from "./UserContext"

//Higher-Order Components
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
