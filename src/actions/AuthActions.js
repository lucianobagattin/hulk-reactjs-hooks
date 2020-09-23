/**
 * Auth Actions
 */

import firebase from '@firebase/app';

// jwt
import { userService } from '../_services';

import { NotificationManager } from 'react-notifications';
import '@firebase/auth';
//Action types
import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE,
	SIGNUP_USER,
	SIGNUP_USER_SUCCESS,
	SIGNUP_USER_FAILURE,
	LOGOUT_USER,
	JWT_LOGIN_REQUEST,
	JWT_LOGIN_SUCCESS,
	JWT_LOGIN_FAILURE
} from './Types';
export const signupUserWithJwt = (user, history) => (dispatch) => {
	// return dispatch => {
		dispatch({ type: JWT_LOGIN_REQUEST, payload: user });
		
		userService.signup(user.email, user.password)
		.then(
			user => { 
				dispatch({type: JWT_LOGIN_SUCCESS, payload: user});
				history.push('/');
				NotificationManager.success('Account Created');	
			},
			error => {
				dispatch({type: JWT_LOGIN_FAILURE, payload: error});
				// dispatch(alertActions.error(error));
			}
		);
}

export const signinUserWithJwt = (user, history) => (dispatch) => {
	// return dispatch => {
		console.log(user.email,user.password,'user')
		console.log('userService ',userService )
		dispatch({ type: JWT_LOGIN_REQUEST, payload: user });
		
		userService.login(user.email, user.password)
		.then(
			user => { 
				dispatch({type: JWT_LOGIN_SUCCESS, payload: user});
				history.push('/');
				NotificationManager.success('User Logged In Successfully');
			},
			error => {
				dispatch({type: JWT_LOGIN_FAILURE, payload: error});
				// dispatch(alertActions.error(error));
			}
		);
}
export const refreshToken = (history) => (dispatch) => {
   userService.refreshToken()
      .then(
         user => {
            console.log('user',user)
         },
         error => {
            console.log('error',error)
         }
      );
}
/**
 * Function to signin using firebase
 */
export const signinUserWithFirebase = (user, history) => (dispatch) => {
	dispatch({ type: LOGIN_USER });
	firebase.auth().signInWithEmailAndPassword(user.email, user.password)
		.then(user => {
			localStorage.setItem("user_id", JSON.stringify(user.user.uid));
			loginUserSuccess(dispatch, localStorage.getItem("user_id"), history);
		})
		.catch((error) => {
			console.log("error", error);
			loginUserFailure(dispatch, error);
		})
}

/**
 * Function to create firebase account
 * @param {*} dispatch 
 * @param {*} user 
 * @param {*} history 
 */
export const signupUserWithFirebase = (user, history) => (dispatch) => {
	dispatch({ type: SIGNUP_USER });
	firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
		.then((user) => {
			localStorage.setItem("user_id", user.user.uid);
			signupUserSuccess(dispatch, localStorage.getItem("user_id"), history);
		})
		.catch((error) => {
			console.log(error);
			signupUserFailure(dispatch, error);
		});
}

/**
 * Function to check Login user success 
 */
function loginUserSuccess(dispatch, user, history) {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
	history.push('/app/dashboard/dashboard1');
	NotificationManager.success('User Logged In');
}

/**
 * Function to get Login user failure 
 */
function loginUserFailure(dispatch, error) {
	dispatch({
		type: LOGIN_USER_FAILURE,
		payload: error
	});
	NotificationManager.error(error.message);
}

/**
 * Signup user success
 */
function signupUserSuccess(dispatch, user, history) {
	dispatch({
		type: SIGNUP_USER_SUCCESS,
		payload: user
	});
	history.push('/app/dashboard/dashboard1');
	NotificationManager.success('Account Created');
}

/**
 * Signup user failure
 */
function signupUserFailure(dispatch, error) {
	dispatch({
		type: SIGNUP_USER_FAILURE,
		payload: error
	});
	NotificationManager.error(error.message);
}


/**
 * Redux Action To Signin User In Firebase With Facebook
 */
export const signinUserWithFacebook = (history) => (dispatch) => {
	dispatch({ type: LOGIN_USER })
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().signInWithPopup(provider)
		.then(function (result) {
			console.log("result::", result);
		}).catch(function (error) {
			console.log("error::", error);
		})
}


/**
 * Redux Action To Signin User In Firebase With Google
 */
export const signinUserWithGoogle = (history) => (dispatch) => {
	dispatch({ type: LOGIN_USER });
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		localStorage.setItem("user_id", "user-id");
		dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
		history.push('/');
		NotificationManager.success('User Login Successfully');
	}).catch(function (error) {
		dispatch({ type: LOGIN_USER_FAILURE, payload: error });
		NotificationManager.error(error.message);
	});
}

/**
 * Redux Action To Signin User In Firebase With Github
 */
export const signinUserWithGithub = (history) => (dispatch) => {
	dispatch({ type: LOGIN_USER });
	const provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		localStorage.setItem("user_id", "user-id");
		dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
		history.push('/');
		NotificationManager.success('User Login Successfully');
	}).catch(function (error) {
		dispatch({ type: LOGIN_USER_FAILURE });
		NotificationManager.error(error.message);
	});
}

/**
 * Redux Action To Signin User In Firebase With Twitter
 */
export const signinUserWithTwitter = (history) => (dispatch) => {
	dispatch({ type: LOGIN_USER });
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function (result) {
		localStorage.setItem("user_id", "user-id");
		dispatch({ type: LOGIN_USER_SUCCESS, payload: localStorage.getItem('user_id') });
		history.push('/');
		NotificationManager.success('User Login Successfully!');
	}).catch(function (error) {
		dispatch({ type: LOGIN_USER_FAILURE });
		NotificationManager.error(error.message);
	});
}

/**
 * Redux action to logout user from firebase
 */
export const hulkLogoutUserFirebase = () => (dispatch) => {
	firebase.auth().signOut()
		.then(() => {
			dispatch({ type: LOGOUT_USER });
			localStorage.removeItem("user_id");
			NotificationManager.success('User Logged Out');
		})
		.catch((error) => {
			NotificationManager.error("Firebase logout error::", error);
		});
}