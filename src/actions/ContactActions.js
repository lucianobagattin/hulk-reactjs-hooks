/**
 * Contact Actions
 */

import {
   ADD_NEW_CONTACT,
   DELETE_CONTACT,
   UPDATE_CONTACT
} from 'actions/Types';

export const addNewContact = (data) => ({
   type: ADD_NEW_CONTACT,
   payload: data
});

export const deleteContact = (data) => ({
   type: DELETE_CONTACT,
   payload: data
});

export const onUpdateContact = (data, ID) => ({
   type: UPDATE_CONTACT,
   payload: { data, ID }
})