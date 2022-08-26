import { useState } from "react";
import { createContext } from "react";

export const DrawerContext = createContext(null);

export const DrawerContextProvider = ({ children }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <DrawerContext.Provider value={{openDrawer, setOpenDrawer} }>
            { children }
        </DrawerContext.Provider>
    )
}
