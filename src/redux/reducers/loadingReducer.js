const SET_LOADING = "SET_LOADING";

const InitialState = {
	loading: false,
};

export const setLoading = (boolean) => ({
	type: SET_LOADING,
	payload: boolean,
});

export const loadingReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
