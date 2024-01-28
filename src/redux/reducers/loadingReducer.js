const SET_LOADING_TRUE = "SET_LOADING_TRUE";
const SET_LOADING_FALSE = "SET_LOADING_FALSE";

const InitialState = {
	loading: false,
};

export const startLoading = () => ({
	type: SET_LOADING_TRUE,
});
export const endLoading = () => ({
	type: SET_LOADING_FALSE,
});

export const loadingReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_LOADING_TRUE:
			return {
				...state,
				loading: true,
			};
		case SET_LOADING_FALSE:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
