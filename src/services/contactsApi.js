import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINTS } from 'constants';
import { prepareHeaders } from 'utils';

const baseUrl = ENDPOINTS.BASE_URL;

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders }),
    endpoints: (builder) => ({
      getAllContacts: builder.query({
        query: () => ENDPOINTS.CONTACTS.baseUrl,
        providesTags: ['Contacts']
      }),
      createContact: builder.mutation({
        query: newContact => ({
          url: ENDPOINTS.CONTACTS.baseUrl,
          method: 'POST',
          body: newContact
        }),
        invalidatesTags: ['Contacts']
      }),
      deleteContact: builder.mutation({
        query: contactId => ({
          url: ENDPOINTS.CONTACTS.baseUrl + '/' + contactId,
          method: 'DELETE'
        }),
        invalidatesTags: ['Contacts']
      }),
      updateContact: builder.mutation({
        query: ({ id, contact }) => ({
          url: ENDPOINTS.CONTACTS.baseUrl + '/' + id,
          method: 'PATCH',
          body: contact
        }),
        invalidatesTags: ['Contacts']
      })
    }),
  })

export const {
  useGetAllContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactsApi;