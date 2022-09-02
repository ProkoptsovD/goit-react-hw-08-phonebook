import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import { usePopoverContext } from 'hooks';
import { useGetLoggedInUserQuery, useLogoutUserMutation } from 'services/authApi';
import { UserName, UserEmail, Title, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
    const [ logoutUser ] = useLogoutUserMutation();
    const { data } = useGetLoggedInUserQuery();
    const { openPopover, anchorEl, onClose } = usePopoverContext();

    const handleUserLogout = () => {
        logoutUser();
        onClose();
    };

    return (
        <Popover
            open={ openPopover }
            anchorEl={ anchorEl }
            onClose={ onClose }
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
        >   
            <Title>Profile</Title>
            <UserName>
                <span>name:</span> { data?.name }
            </UserName>
            <UserEmail>
                <span>email:</span> { data?.email }
            </UserEmail>
            <LogoutButton onClick={ handleUserLogout }>
                Logout <LogoutIcon />
            </LogoutButton>
        </Popover>
    )
}

export default UserMenu;