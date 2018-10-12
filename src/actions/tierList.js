import uuid from 'uuid';
import db from '../firebase/firebase';


//GET TIER LISTS

export const getTierList = ( id ) => ({
    type: 'GET_TIER_LIST',
    id
})

export const getTierLists = (tierLists) => ({
    type: 'GET_TIER_LISTS',
    tierLists
})

export const startGetAllTierList = () => {
    return (dispatch) => {
        const tierLists = {};
        return db.collection('tierLists').get()
        .then((collection) => {
            collection.docs.forEach(doc => {
                tierLists[doc.id] = doc.data().tierList;
            });
            
            console.log(tierLists);
            dispatch(getTierLists(tierLists))
            })
    }
}

// export const startGetAllUserTierList = () => {
//     return (getState, dispatch) => {
//         const uid = getState().auth.uid
//         return db.collection('tierLists').where("userId", "==", uid)
//         .get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((eachQuery) => {
//                 dispatch(getTierList(eachQuery))
//             })
//         })
//     }
// }


//ADD TIER LISTS

export const createTierList = (tierList) => ({
        type: 'CREATE_TIER_LIST',
        tierList
});


export const startCreateTierList = ( tierListData = {} ) => {
    return (dispatch) => {
        const {
            title = '',
            description = '',
            numberOfCompetition = 0,
            listOfCompetitors = {},
            key = ''
        } = tierListData;
        const tierList = { title, description, numberOfCompetition, listOfCompetitors, key }
        const newTierList = db.collection('tierLists');
        return newTierList.add({tierList}).then((snapshot) => {
            tierList.key = snapshot.id;
            console.log('snapshot',snapshot);
            /*snapshot.update({key: snapshot.id}).then((newSnapshot) => {
                console.log('key was updated',newSnapshot);
                
            });*/
            dispatch(createTierList(tierList));
        });
    }
 }
;
 // REMOVE TIER LIST

// export const removeTierList = ({ id } = {}) => {
//     type: 'REMOVE_TIERLIST',
//     id
// }

// export const setRemoveTierList = ({ id } = {}) => {
//     return (dispatch) => {
//         return db.collection('tierLists').doc(id).delete().then(() => {
//             dispatch(removeTierList({ id }))
//             console.log('removed!')
//         });
//     };
// }


// //UPDATE TIER LIST

// export const updateTierList = (id, updates) => {
//     type: 'UPDATE_TIER_LIST',
//     id,
//     updates
// }

// export const startUpdateTierList = (id, updates) => {
//     return (dispatch) => {
//         return db.collection('tierLists').doc(id).update(updates).then(() => {
//             dispatch(updateTierList(id, updates))
//             console.log('updated!')
//         })
//     }
// }