import * as act from '../actions/actionsTypes';

const initialState = { 
	email: '',
	password: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case act.EMAIL_CHANGED:
		return {
			...state,
			email: action.payload
		}
		
		case act.PASSWORD_CHANGED:
		return {
			...state,
			password: action.payload
		}

		case act.LOGIN_USER_SUCESS

		default:
		return state;
	}
};

export default reducer;