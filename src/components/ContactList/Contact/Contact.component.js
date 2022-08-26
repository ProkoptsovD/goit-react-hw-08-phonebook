import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import CreateIcon from '@mui/icons-material/Create';
import { ContactCard, EditButton, Name, Phone } from './Contact.styled';
import { useDeleteContactMutation } from 'services/contactsApi';
import { notificationService } from 'services/notificationService';
import { useContactFormMode, useDrawerContext } from 'hooks';

const messages = {
    onSuccess: 'Contact was successfuly removed',
    onError: 'Ups... looks like an erorr. Please, try again'
}

const Contact = ({ id, name, number }) => {
    const [ deleteContact, isSuccess, isError, isLoading ] = useDeleteContactMutation();
    const { setIsEditMode } = useContactFormMode();
    const { setOpenDrawer } = useDrawerContext();
    
    const handleContactDeleting = (contactId) => {
        deleteContact(contactId);
        notificationService(isSuccess, isError, messages);
    }
    const handleContactEditing = (contact) => {
        setIsEditMode(contact);
        setOpenDrawer(true);
    }

    return (
        <ContactCard>
            <div>
                <Name>
                    {name}
                </Name>
                <Phone>
                    {number}
                </Phone>
            </div>
            <EditButton
                onClick={() => handleContactEditing({ id, name, number })}
            >
                <CreateIcon />
            </EditButton>
            <Button
                onClick={() => handleContactDeleting(id)}
                disabled={isLoading}
            >
                &#9587;
            </Button>
        </ContactCard>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
}

export default Contact;