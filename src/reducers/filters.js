const filtersReducerDefaultState = {
    text: '',
};


export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        // const item = action.text
        // return state.text = item
            return {
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
};