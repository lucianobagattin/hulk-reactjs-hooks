/**
 * Email App Actions
 */
import {
   GET_EMAILS,
   READ_EMAIL,
   ON_SELECT_EMAIL,
   UPDATE_EMAIL_SEARCH,
   SEARCH_EMAIL,
   ON_DELETE_MAIL,
   ON_SPAM_MAIL,   
   ON_DRAFT_MAIL,      
   ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING,
   GET_SENT_EMAILS,
   GET_INBOX,
   GET_DRAFTS_EMAILS,
   GET_SPAM_EMAILS,
   GET_TRASH_EMAILS,
   SELECT_ALL_EMAILS,
   UNSELECT_ALL_EMAILS,
   ON_DELETE_EMAIL_FROM_TRASH_FOLDER
} from './Types';

export const getEmails = () => ({
    type: GET_EMAILS,
});

export const onSelectEmail = (email) => ({
   type: ON_SELECT_EMAIL,
   payload: email
});

export const selectAllEMails = () => ({
   type: SELECT_ALL_EMAILS
});


export const getUnselectedAllEMails = () => ({
   type: UNSELECT_ALL_EMAILS
});

export const getInbox = () => ({
    type: GET_INBOX
});

export const getSentEmails = () => ({
    type: GET_SENT_EMAILS
});

export const getDraftsEmails = () => ({
    type: GET_DRAFTS_EMAILS
});

export const getSpamEmails = () => ({
    type: GET_SPAM_EMAILS
});

export const getTrashEmails = () => ({
    type: GET_TRASH_EMAILS
});

export const readEmail = (email) => ({
    type: READ_EMAIL,
    payload: email
});

export const updateSearchEmail = (searchText) => ({
    type: UPDATE_EMAIL_SEARCH,
    payload: searchText
})

export const searchEmail = (searchText) => ({
    type: SEARCH_EMAIL,
    payload: searchText
});

export const onDeleteEmail = () => ({
    type: ON_DELETE_MAIL
});

export const onSpamEmail = () => ({
    type: ON_SPAM_MAIL
});

export const onDraftEmail = () => ({
    type: ON_DRAFT_MAIL
});

export const onNavigateToEmailListing = () => ({
    type: ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING
});

export const onDeleteEmailFromTrash = () => ({
    type: ON_DELETE_EMAIL_FROM_TRASH_FOLDER
});