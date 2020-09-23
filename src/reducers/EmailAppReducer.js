import { NotificationManager } from 'react-notifications';
// action types
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
   UNSELECT_ALL_EMAILS,
   SELECT_ALL_EMAILS,
   ON_DELETE_EMAIL_FROM_TRASH_FOLDER
} from 'actions/Types';

// email data
import folders from 'assets/Data/email-app/folders';
import emailslists from 'assets/Data/email-app/emails.json';

const INITIAL_STATE = {
   allEmail: emailslists.data,
   emails: emailslists.data,
   currentEmail: null,
   selectedEmails: 0,
   folders,
   emailslists,
   selectedFolder: 0,
   folderMails: [],
   searchEmailText: ''
};

export default (state = INITIAL_STATE, action) => {
   switch(action.type){

      case GET_EMAILS:
         return { 
            ...state, 
            allEmail: state.emailslists.data, 
            emails: state.emailslists.data 
         };

      case ON_SELECT_EMAIL:
         action.payload.selected = !action.payload.selected;
         let selectedEmails = 0;
         const emails = state.emails.map(email => {
            if (email.selected) {
               selectedEmails++;        
            }
            return email;
         }
         );
         return {
            ...state,
            selectedEmails,
            emails
         }

      case UNSELECT_ALL_EMAILS:
         const unselectedEmails = state.emails.map(mail => {
            mail.selected = false
            return mail;
         });
         return {
            ...state,
            selectedEmails: 0,
            emails: unselectedEmails
         };

      case SELECT_ALL_EMAILS:
         const selectAllEmails = state.emails.map(mail => {
            mail.selected = true
            return mail
         });
         return {
            ...state,
            selectedEmails: selectAllEmails.length,
            emails: selectAllEmails
         }
      
      case GET_INBOX:
         const inbox = state.allEmail && state.allEmail.filter((email) => !email.deleted && email.folder === 0);
         return { ...state, emails: inbox, selectedFolder: 0 };           
      
      case GET_SENT_EMAILS:
         const sentEmails = state.allEmail && state.allEmail.filter((email) => !email.deleted && email.folder === 1);
         return { ...state, emails: sentEmails, selectedFolder: 1 };   
      case GET_DRAFTS_EMAILS:
         const drafts = state.allEmail && state.allEmail.filter((email) => !email.deleted && email.folder === 2);
         return { ...state, emails: drafts, selectedFolder: 2 };   
      
      case GET_SPAM_EMAILS:
         const spamEmails = state.allEmail && state.allEmail.filter((email) => !email.deleted && email.folder === 3);
         return { ...state, emails: spamEmails, selectedFolder: 3 };

      case GET_TRASH_EMAILS:
         const trashEmails = state.allEmail && state.allEmail.filter((email) => email.folder === 4);
         return { ...state, emails: trashEmails, selectedFolder: 4 };
      
      case READ_EMAIL:
         
         const emailToRead = state.allEmail && state.allEmail.filter((email) => email.id === action.payload);
         const allEmailsUpdated = state.allEmail;
         
         for(let i = 0; i < allEmailsUpdated.length; i++){
            if(allEmailsUpdated[i].id === action.payload) {
               allEmailsUpdated[i].read = true
            }
         }

         return { ...state, currentEmail: emailToRead[0], emails: allEmailsUpdated}

      case UPDATE_EMAIL_SEARCH:
         return { ...state, searchEmailText: action.payload };

      case SEARCH_EMAIL:
         if (action.payload === '') {
            return { ...state, emails: state.allEmail.filter((email) => !email.deleted) };
         } else {
            const searchEmails = state.allEmail.filter((email) =>
               !email.deleted && email.email_subject.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
            return { ...state, emails: searchEmails }
         }
      
      case ON_DELETE_MAIL:
         const mails = state.emails.map(mail => {
            if (mail.selected) {
               mail.folder = 4;
               mail.selected = false;
               mail.deleted = true;
               return mail;
            } else {
               return mail;
            }
         });
         NotificationManager.success('Email has been moved to trash!');
         return {
            ...state,
            selectedEmails: 0,
            currentEmail: null,
            loading: true,
            emails: mails.filter(mail => mail.folder === state.selectedFolder)
         }
      
      case ON_DELETE_EMAIL_FROM_TRASH_FOLDER:
         const mails1 = state.emails.map(mail => {
            if(mail.selected){
               mail.folder = 0;
               return mail;
            } else {
              return mail;
           }
         });
         NotificationManager.success('Email has been deleted permanently!');
         return {
            ...state,
            selectedEmails: 0,
            currentEmail: null,
            loading: true,
            emails: mails1.filter(mail => mail.folder === state.selectedFolder)
         }

      case ON_SPAM_MAIL:
         const spamMails = state.emails.map(mail => {
            if (mail.selected) {
               mail.folder = 3;
               mail.selected = false;
               return mail;
            } else {
               return mail;
            }
         });
         NotificationManager.success('Email has been moved to spam!');
         return {
            ...state,
            selectedEmails: 0,
            currentEmail: null,
            loading: true,
            emails: spamMails.filter(mail => mail.folder === state.selectedFolder)
         }
         
      case ON_DRAFT_MAIL:
         const draftMails = state.emails.map(mail => {
            if (mail.selected) {
               mail.folder = 2;
               mail.selected = false;
               return mail;
            } else {
               return mail;
            }
         });
         NotificationManager.success('Email has been moved to draft!');
         return {
            ...state,
            selectedEmails: 0,
            currentEmail: null,
            loading: true,
            emails: draftMails.filter(mail => mail.folder === state.selectedFolder)
         }

      case ON_BACK_PRESS_NAVIGATE_TO_EMAIL_LISTING:
         const allmails = state.emails.map(mail => {
            if (mail.selected) {
               mail.selected = false;
               return mail;
            } else {
               return mail;
            }
         });
         return { ...state, currentEmail: null, emails: allmails };
         
      default: return { ...state };   
   }
}