import { ListItem, ListOfContacts } from './ContactList.styled';
import { useGetAllContactsQuery } from 'services/contactsApi';
import { useSelector } from 'react-redux';
import { filterSelectors } from 'redux/filter/filter.selectors';
import Contact from './Contact';
import Empty from '../Empty';
import Loader from 'components/common/Loader';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants';

const ContactList = () => {
    const { data , error, isLoading  } = useGetAllContactsQuery();
    const filter = useSelector(filterSelectors.getFilter);
    const navigate = useNavigate();

    useEffect(() => {
        const isUnauthorized = error?.status === 401;

        if(isUnauthorized) navigate('/' + ROUTES.LOGIN)

    }, [error, navigate])
    
    const hasData = data?.length && !error;
    const showLoader = !hasData && !isLoading;
    
    const filteredContacts = hasData ? data.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) : [];
    const contactList = filteredContacts.length ? filteredContacts : data;

    return (
        <>
            {isLoading  && <Loader type="dual-rings"/>}
            {hasData ? <ListOfContacts>
                            {contactList.map(({ id, name, number }) => (
                                    <ListItem key={id}>
                                        <Contact
                                            id={id}
                                            name={name}
                                            number={number}
                                        />
                                    </ListItem>
                                ))}
                        </ListOfContacts>
                    : null
            }
            {showLoader ? <Empty message="Your phonebook is empty..."/> : null}
        </>
    );
}

export default ContactList;