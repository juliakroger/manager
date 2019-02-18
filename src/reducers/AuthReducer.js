import * as act from '../actions/actionsTypes';

const initialState = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
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

		case act.LOGIN_USER_SUCESS:
		return {
			...state,
			...initialState,
			user: action.payload
		}

		case act.LOGIN_USER_FAIL:
		return {
			...state,
			error: 'Authentication failed',
			loading: false
		}

		case act.LOGIN_USER:
		return {
			...state,
			loading: true
		}

		default:
		return state;
	}
};

export default reducer;
