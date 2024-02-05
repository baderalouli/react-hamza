export const setInputValue = (value) => ({
    type: 'SET_INPUT_VALUE',
    payload: value,
});

export const setExcelFile = (file) => ({
    type: 'SET_EXCEL_FILE',
    payload: file,
});

export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
});