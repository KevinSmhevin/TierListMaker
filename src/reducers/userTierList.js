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
        case 'UPDATE_TIER_LIST':
            return state.map((userTierList) => {
            if (tierList.id === action.id) {
              return {
                ...userTierList,
                ...action.updates
              };
            } else {
              return tierList;
            };
          });
        default: 
            return state;
        }
};  