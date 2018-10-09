const tierListDefaultState = [];

export default (state = tierListDefaultState, action) => {
    switch(action.type) {
        case 'CREATE_TIER_LIST':
          return [
            ...state,
            action.tierList
        ];
        case 'REMOVE_TIER_LIST':
          return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TIER_LIST':
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