import { useDispatch, useSelector } from "react-redux"
import { contactsSelectors } from "redux/contacts/contacts.selectors"
import { contactsActions } from "redux/contacts/contacts.slice";

export const useContactFormMode = () => {
    const dispatch = useDispatch();
    const toEdit = useSelector(contactsSelectors.getContactToEdit);
    const isEditMode = toEdit !== null;

    const setIsEditMode = (value = null) => dispatch(contactsActions.setToEdit(value));

    return { isEditMode, setIsEditMode, toEdit };
}