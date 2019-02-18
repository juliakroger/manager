import firebase from 'firebase';
import * as act from './actionsTypes';


export const emailChanged = (text) => {
	return {
		type: act.EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: act.PASSWORD_CHANGED,
		payload: text
	};
};


export const loginUser = ({email, password}) => {
	return (dispatch) => {
		dispatch({ type: act.LOGIN_USER })

		firebase.auth().signInWithEmailAndPassword(email,password)
		.then(user => loginUserSucess(dispatch, user))
		.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then( user => loginUserSucess(dispatch, user))
				.catch()
			})
	}
}

const loginUserSucess = (dispatch, user) => {
	dispatch({
		type: act.LOGIN_USER_SUCESS,
		payload: user
	})
}


const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL })
}
