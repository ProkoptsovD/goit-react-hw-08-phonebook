import { useRef } from 'react';
import DrawerMui from '@mui/material/Drawer';
import { useDrawerContext } from 'hooks';

const Drawer = ({ anchor, children, ...restProps }) => {
    const { openDrawer, setOpenDrawer } = useDrawerContext();
    const drawerRef = useRef(null);

    const onClose = (e) => {
        const isEscapeKeyPressed = e.code === 'Escape';

        isEscapeKeyPressed && setOpenDrawer(false);
    }
    const onClick = (e) => {
        const isDrawerBackdropClicked = e.target === drawerRef.current;

        isDrawerBackdropClicked && setOpenDrawer(false);
    }

    return (
        <DrawerMui
            ref={ drawerRef }
            anchor={ anchor }
            open={ openDrawer }
            hideBackdrop={ true }
            onClose={ onClose }
            onClick={ onClick }
            { ...restProps }
          >
            {children}
        </DrawerMui>
    )
}

export default Drawer;