import { useState } from 'react';
import { useAuth, usePopoverContext } from 'hooks';
import { Wrapper, UserButton } from './Greeting.styled';
import UserMenu from 'components/UserMenu';

const Greeting = () => {
    const [ shouldRenderUserMenu, setShouldRenderUserMenu ] = useState(false);
    const { name } = useAuth();
    const { setAnchorEl } = usePopoverContext();

    const handleUserButtonClick = (e) => {
        if(!name) return;

        setAnchorEl(e.currentTarget);
        setShouldRenderUserMenu(true);
    }

    return (
        <Wrapper>
            Hi, <UserButton 
                    onClick={ handleUserButtonClick }
                    isguest={ String(!name) }
                >
                    { name ?? 'Guest' }
                </UserButton>
                { shouldRenderUserMenu ? <UserMenu /> : null }
        </Wrapper>
    )
}

export default Greeting;