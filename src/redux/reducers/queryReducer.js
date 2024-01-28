import { QUERY } from "../actions/actions";

const InitialState = {
	query: "",
};

const queryReducer = (state = InitialState, action) => {
	switch (action.type) {
		case QUERY:
			return { query: action.payload };
		default:
			return state;
	}
};

export default queryReducer;
