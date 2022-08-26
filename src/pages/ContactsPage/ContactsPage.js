import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Drawer from 'components/Drawer/Drawer.component';
import { OuterWrapper, InnerWrapper, OpenDrawerButton } from './ContactsPage.styled';
import { useContactFormMode, useDrawerContext } from 'hooks';

const ContactsPage = () => {
    const { openDrawer, setOpenDrawer } = useDrawerContext();
    const { isEditMode, setIsEditMode } = useContactFormMode();

    const formTitle = isEditMode ? 'Edit contact' : 'Create new contact';

    return (
        <OuterWrapper>
            <InnerWrapper>
                <Filter />
                <ContactList />
            </InnerWrapper>
            <OpenDrawerButton
                onClick={() => { setIsEditMode(null); setOpenDrawer(!openDrawer) }}
                variant='contained'
            >
                Add contact
            </OpenDrawerButton>
            <Drawer 
                anchor={ 'right' }
            >
                <ContactForm
                    formTitle={ formTitle }
                />
            </Drawer>
        </OuterWrapper>
    )
}

export default ContactsPage;