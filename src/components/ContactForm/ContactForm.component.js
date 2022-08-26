import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from "react";
import { Form, Wrapper, AddContact, Input, FormTitle, ClearButton } from './ContactForm.styled';
import { useCreateContactMutation, useUpdateContactMutation } from "services/contactsApi";
import { notificationService } from "services/notificationService";
import { storage } from "services";
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/contacts.selectors';
import { useContactFormMode } from 'hooks';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CONTACT_NAME_KEY = 'contact-name';
const CONTACT_NUMBER_KEY = 'contact-number';

const initializeName = () => storage.load(CONTACT_NAME_KEY) ?? '';
const initializeNumber = () => storage.load(CONTACT_NUMBER_KEY) ?? '';

const ContactForm = ({ formTitle }) => {
    const [ name, setName ] = useState(initializeName);
    const [ number, setNumber ] = useState(initializeNumber);

    const [ shouldDisable, setShouldDisable ] = useState(false);
    const [ isSaved, setIsSaved] = useState(false);

    const { isEditMode, toEdit } = useContactFormMode();
    const isFirstRender = useRef(true);

    const [ createContact, creation ] = useCreateContactMutation();
    const [ updateContact, update ] = useUpdateContactMutation();
    
    const hasContact = useSelector(contactsSelectors.getHasContact(name, { skip: isEditMode }));

    const contactMap = {
        'name': (name) => setName(name),
        'number': (number) => setNumber(number)
    }

    // styles
    const buttonText = isSaved ? 'Saved' : 'Save';
    const savedIcon = isSaved ? <CheckCircleIcon /> : null;

    // define whether both request type are successfull
    const isRequestSucceed =
            (creation.isSuccess && !creation.isUninitialized) ||
            (update.isSuccess && !update.isUninitialized);
    
    // define whether both request type have error
    const isRequestFailed = creation.isError || update.isError;

    useEffect(() => {
        if(isEditMode && isFirstRender.current) {
            setName(toEdit?.name);
            setNumber(toEdit?.number);

            isFirstRender.current = false;
        }

        storage.save(CONTACT_NAME_KEY, name);
        storage.save(CONTACT_NUMBER_KEY, number);

    }, [name, number, isEditMode, toEdit?.name, toEdit?.number]);

    useEffect(() => {
        if(isRequestSucceed) {
            setIsSaved(true);
            setShouldDisable(true)
        }

        return () => {
            if(isRequestSucceed || isEditMode) {
                window.localStorage.removeItem(CONTACT_NAME_KEY);
                window.localStorage.removeItem(CONTACT_NUMBER_KEY);
            }
        }
    }, [isRequestSucceed, isEditMode]);

    const handleInputTypedValue = (e) => {
        const { name, value } = e.target;
        contactMap[name](value);
    }

    const handleSendingRequest = () => {
        const contact = { name, number };
        
        isEditMode
            ? updateContact({ id: toEdit.id, contact }) 
            : createContact(contact);
        
        notificationService(isRequestSucceed, isRequestFailed, {
                onSuccess: `Contact ${name} was added to the phonebook`,
                onError: 'Something went wrong! Please, try again'
            }
        )
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!isEditMode && hasContact) {
            notificationService(null, null, { onError: `${name} has been already added`}, 'errorOnly');
            return;
        }
        
        handleSendingRequest();
    }
    const handleClearBtnClick = () => {
        setName(''); 
        setNumber('');
        setIsSaved(false)
    };

    return (
        <>
            { !formTitle ? null : <FormTitle>{ formTitle }</FormTitle> }
            <Form
                onSubmit={ handleFormSubmit }
            >
                <Wrapper>
                    <Input
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleInputTypedValue}
                        variant="outlined"
                        label='Name'
                        disabled={ shouldDisable }
                    />
                    <Input
                        id="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleInputTypedValue}
                        variant="outlined"
                        label="Number"
                        disabled={ shouldDisable }
                    />
                    <AddContact
                        type="submit"
                        disabled={ isSaved || shouldDisable }
                    >
                        { savedIcon }
                        { buttonText }
                    </AddContact>
                    <ClearButton
                        type="button"
                        variant="outlined"
                        onClick={ handleClearBtnClick }
                    >
                        Clear
                    </ClearButton>
                </Wrapper>
            </Form>
        </>
    )
}

ContactForm.propTypes = {
    formTitle: PropTypes.string
}

export default ContactForm;