const userTierListReducerDefaultState = []

export default (state = userTierListReducerDefaultState, action) => {
    switch (action.type) { 
        case 'CREATE_USER_TIER_LIST':
            return [
                ...state,
                action.userTierList
            ];
        case 'GET_USER_TIER_LISTS':
            state = action.userTierLists;
            return state;
        case 'REMOVE_USER_TIER_LIST':
            return state.filter((userTierList) => userTierList.id !== action.id);
        case 'UPDATE_USER_TIER_LIST':
            return state.map((userTierList) => {
                if (userTierList.id === action.id) {
                    return {
                        ...userTierList,
                        ...action.updates
                    };
                } else {
                    return userTierList;
                };
            });
        default: 
            return state;
        }
};  