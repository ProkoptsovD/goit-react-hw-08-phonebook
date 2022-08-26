import { useState } from 'react';
import { useAuth, usePopoverContext } from 'hooks';
import { Wrapper, UserButton } from './Greeting.styled';
import UserMenu from 'components/UserMenu';

const Greeting = () => {
    const [ shouldRenderUserMenu, setShouldRenderUserMenu ] = useState(false);
    const { name } = useAuth();
    const { setAnchorEl } = usePopoverContext();

    return (
        <Wrapper>
            Hi, <UserButton onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setShouldRenderUserMenu(true);
            }}>
                    { name }
                </UserButton>
                { shouldRenderUserMenu ? <UserMenu /> : null }
        </Wrapper>
    )
}

export default Greeting;