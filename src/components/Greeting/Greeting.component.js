import UserMenu from 'components/UserMenu';
import { useAuth, usePopoverContext } from 'hooks';
import { Wrapper, UserButton } from './Greeting.styled';

const Greeting = () => {
    const { name } = useAuth();
    const { setAnchorEl } = usePopoverContext();

    return (
        <Wrapper>
            Hi, <UserButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    { name }
                </UserButton>
                <UserMenu />
        </Wrapper>
    )
}

export default Greeting;