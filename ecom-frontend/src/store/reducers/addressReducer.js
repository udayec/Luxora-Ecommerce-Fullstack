const initialState = {
  addressMap: {}, // addressId -> address object
  loading: false,
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ADDRESS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ADDRESS_SUCCESS":
      return {
        ...state,
        loading: false,
        addressMap: {
          ...state.addressMap,
          [action.payload.addressId]: action.payload.data,
        },
      };
    case "FETCH_ADDRESS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default addressReducer;
