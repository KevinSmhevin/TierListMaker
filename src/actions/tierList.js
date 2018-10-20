import db from '../firebase/firebase';
//GET TIER LISTS

export const getTierLists = (tierLists) => ({
    type: 'GET_TIER_LISTS',
    tierLists
})

export const getUserTierLists = (userTierLists) => ({
    type: 'GET_USER_TIER_LISTS',
    userTierLists
})

export const startGetAllTierList = () => {
    return (dispatch) => {
        const tierLists = [];
        return db.collection('tierLists').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                tierLists.push({id: doc.id, ...doc.data().tierList});
            });
            dispatch(getTierLists(tierLists));
        });
    }
}

export const startGetAllUserTierList = () => {
    return (dispatch) => {
        const userTierLists = [];
        return db.collection('userTierLists').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                userTierLists.push({id: doc.id, ...doc.data().userTierList});
            });
            dispatch(getUserTierLists(userTierLists));
        });
    }
}

export const createTierList = (tierList) => ({
    type: 'CREATE_TIER_LIST',
    tierList
});

export const createUserTierList = (userTierList) => ({
    type: 'CREATE_USER_TIER_LIST',
    userTierList
})


export const startCreateTierList = ( tierListData = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const displayName = getState().auth.displayName;
        const {
            title = '',
            description = '',
            numberOfCompetition = 0,
            listOfCompetitors = {},
            userId = uid,
            columns = {
                'column-s': {
                    id: 'column-s',
                    title: 'S',
                    competitorIds: Object.keys(listOfCompetitors)
                },
                'column-a': {
                    id: 'column-a',
                    title: 'A',
                    competitorIds: [],
                },
                'column-b': {
                    id: 'column-b',
                    title: 'B',
                    competitorIds: [],
                },
                'column-c': {
                    id: 'column-c',
                    title: 'C',
                    competitorIds: [],
                },
                'column-d': {
                    id: 'column-d',
                    title: 'D',
                    competitorIds: [],
                },
                'column-e': {
                    id: 'column-e',
                    title: 'E',
                    competitorIds: [],
                },
                'column-f': {
                    id: 'column-f',
                    title: 'F',
                    competitorIds: [],
                },
            },
            columnOrder = ['column-s', 'column-a', 'column-b', 'column-c', 'column-d', 'column-e', 'column-f']
        } = tierListData;
        const tierList = { title, description, numberOfCompetition, listOfCompetitors, columns, columnOrder, userId, displayName }
        const newTierList = db.collection('tierLists');
        return newTierList.add({tierList}).then((snapshot) => {
        tierList.id = snapshot.id
        dispatch(createTierList(tierList));
       });
    }
 }
;

 export const startCreateUserTierList = ( userTierListData = {} ) => {
     return (dispatch, getState ) => {
         const uid = getState().auth.uid;
         const displayName = getState().auth.displayName;
         const {
             title = '',
             description = '',
             listOfCompetitors = {},
             columns = {},
             columnOrder = [],
             tierListId = '',
             userId = uid,
         } = userTierListData
         const userTierList = { title, description, listOfCompetitors, columns, columnOrder, tierListId, userId, displayName }
         const userTierListDocument = db.collection('userTierLists');
         return userTierListDocument.add({userTierList}).then((snapshot) => {
             userTierList.id = snapshot.id;
             dispatch(createUserTierList(userTierList))
         })
    }
 }

//  REMOVE TIER LIST

export const removeTierList = (id) => ({
    type: 'REMOVE_TIER_LIST',
    id
});

export const removeUserTierList = (id) => ({
    type: 'REMOVE_USER_TIER_LIST',
    id
});

export const startRemoveTierList = (id) => {
    return (dispatch) => {
        return db.collection('tierLists').doc(id).delete().then(() => {
            dispatch(removeTierList(id))
        })
    };
};

export const startRemoveUserTierList = (id) => {
    return (dispatch) => {
        return db.collection('userTierLists').doc(id).delete().then(() => {
            dispatch(removeUserTierList(id))
        })
    };
};

//UPDATE TIER LIST

export const updateTierList = (id, updates) => ({
    type: 'UPDATE_TIER_LIST',
    id,
    updates
});

export const updateUserTierList = (id, updates) => ({
    type: 'UPDATE_USER_TIER_LIST',
    id,
    updates
});

export const startUpdateTierList = (id, updates ) => {
    return (dispatch) => {
        return db.collection('tierLists').doc(id).update(updates).then(() => {
            dispatch(updateTierList(id, updates))
        });
    };
};

export const startUpdateUserTierList = (id, updates) => {
    return (dispatch) => {
        const userTierListUpdates = {updates}
        console.log(userTierListUpdates.updates)
        const userTierList = db.collection('userTierLists').doc(id)
        return userTierList.update(userTierListUpdates.updates).then(() => {
            console.log(userTierListUpdates.updates)
            dispatch(updateUserTierList(id, userTierListUpdates.updates))
        })
    }
}

export const getMyTierLists = (myTierLists) => ({
    type: 'GET_MY_TIER_LISTS',
    myTierLists
})

export const startGetAllMyTierList = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const myTierLists = [];
        const tierListRef = db.collection('tierLists')
        tierListRef.where("tierList.userId", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                myTierLists.push({id: doc.id + 1, ...doc.data().tierList})
            });
            dispatch(getMyTierLists(myTierLists));
        });
    };
};

export const getMyUserTierLists = (myUserTierLists) => ({
    type: 'GET_MY_USER_TIER_LISTS',
    myUserTierLists
})

export const startGetAllMyUserTierList = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const myUserTierLists = [];
        const tierListRef = db.collection('userTierLists')
        tierListRef.where("userTierList.userId", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                myUserTierLists.push(doc.data().userTierList);
            });
            dispatch(getMyTierLists(myUserTierLists));
        });
    };
};

//ADD TIER LISTS