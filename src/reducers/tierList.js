const tierListReducerDefaultState =  [];

export default (state = tierListReducerDefaultState, action) => {
    switch (action.type) { 
        case 'GET_TIER_LIST':
          return state.filter(({ id }) => id === action.id);
        case 'GET_TIER_LISTS':
          for (let i=0; i <action.tierLists.length; i++) {
            console.log(state)
            return state.push(action.tierLists[i])
          }
        case 'CREATE_TIER_LIST':
          return [
            ...state,
            action.tierList
        ];
        case 'REMOVE_TIER_LIST':
          return state.filter(({ id }) => id !== action.id);
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