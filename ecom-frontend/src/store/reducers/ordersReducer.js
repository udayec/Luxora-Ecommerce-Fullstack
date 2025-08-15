const initialState = {
    orders: [],
    isLoading: false,
    error: null,
    successMessage: null,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ORDERS_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: null,
                successMessage: null,
            };

        case "FETCH_ORDERS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                orders: action.payload,
                error: null,
                successMessage: "Orders fetched successfully",
            };

        case "FETCH_ORDERS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                orders: [],
            };

        default:
            return state;
    }
};

