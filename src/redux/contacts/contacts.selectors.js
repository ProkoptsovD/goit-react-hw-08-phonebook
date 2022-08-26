import { createSelector } from "@reduxjs/toolkit";
import { contactsApi } from "services/contactsApi";

const allContactsResult = contactsApi.endpoints.getAllContacts.select();

const getAllContacts = createSelector(
    allContactsResult,
    contacts => contacts?.data ?? []
);
const getHasContact = (contactName, { skip }) => createSelector(
    getAllContacts,
    (allContacts) => {
        return skip ? null : allContacts.some(({ name }) => name.toLowerCase() === contactName.toLowerCase())
    }
)

const getContactToEdit = state => state.contacts.toEdit;

export const contactsSelectors = {
    getAllContacts,
    getHasContact,
    getContactToEdit
}