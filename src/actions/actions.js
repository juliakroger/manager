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
		firebase.auth().signInWithEmailAndPassword(email,password);
		.then(user => {
			dispatch({
				type: act.LOGIN_USER_SUCESS,
				payload: user
			})
		})	
	}

}