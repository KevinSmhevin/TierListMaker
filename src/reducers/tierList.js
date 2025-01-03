const tierListReducerDefaultState =  [];

export default (state = tierListReducerDefaultState, action) => {
    switch (action.type) { 
        case 'GET_TIER_LIST':
          return state.filter(({ id }) => id === action.id);
        case 'GET_TIER_LISTS':
        state = action.tierLists;
        return state
        case 'GET_MY_TIER_LISTS':
        state = action.myTierLists;
        console.log(state)
        return state
        case 'CREATE_TIER_LIST':
          return [
            ...state,
            action.tierList
        ];
        case 'REMOVE_TIER_LIST':
          return state.filter(( tierList ) => tierList.id !== action.id);
        case 'UPDATE_TIER_LIST':
          return state.map((tierList) => {
            if (tierList.id === action.id) {
              return {
                ...tierList,
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