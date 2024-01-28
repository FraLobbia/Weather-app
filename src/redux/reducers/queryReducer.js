import { QUERY, STORE_RESPONSE_QUERY } from "../actions/actions";

const InitialState = {
	query: "",
	responseQuery: {},
};

const queryReducer = (state = InitialState, action) => {
	switch (action.type) {
		case QUERY:
			return { ...state, query: action.payload };
		case STORE_RESPONSE_QUERY:
			return { ...state, responseQuery: action.payload };
		default:
			return state;
	}
};

export default queryReducer;
