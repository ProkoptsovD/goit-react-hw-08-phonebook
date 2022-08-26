import { createContext, useEffect, useState } from "react";

export const PopoverContext = createContext(null);

export const PopoverContextProvider = ({ children }) => {
    const [ openPopover, setOpenPopover ] = useState(false);
    const [ anchorEl, setAnchorEl ] = useState(null);
    const onClose = () => {
        setOpenPopover(false);
        setAnchorEl(null);
    };

    useEffect(() => {
        if(anchorEl) setOpenPopover(Boolean(anchorEl))

    }, [anchorEl])

    return (
        <PopoverContext.Provider value={
            { openPopover, setOpenPopover, onClose, setAnchorEl, anchorEl }}
        >
                { children }
        </PopoverContext.Provider>
    )
}