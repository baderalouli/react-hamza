// reducer.js
const initialState = {
    inputValue: '',
    excelFile: null,
    searchResults: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.payload,
            };
        case 'SET_EXCEL_FILE':
            return {
                ...state,
                excelFile: action.payload,
            };
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
