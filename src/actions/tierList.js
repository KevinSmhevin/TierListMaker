import uuid from 'uuid';
import { database } from 'firebase';

export const createTierList = (
    {
        title = '',
        description = '',
        numberOfCompetition = 0,
        // category = 'other',
        // tierListOrder = ascending,
        listOfCompetitors = {}
    }
    = {} ) => ({
        type: 'CREATE_TIER_LIST',
        tierList: {
            id: uuid(),
            title,
            description,
            numberOfCompetition,
            // category,
            // tierListOrder,
           listOfCompetitors,
        }
    })

    export const startCreateTierList = ( tierListData = {} ) => {
        return (dispatch, getState) => {
            const uid = getState().auth.uid 
            const {
                title = '',
                description = '',
                numberOfCompetition = 0,
                listOfCompetitors = {}
            } = tierListData;
            const tierList = { title, description, numberOfCompetition, listOfCompetitors }
            return database.ref(`tierlists/${uid}-tierLists`).push(tierList).then((ref) => {
                dispatch()
            })

        }
    }


// const addExpense = (
//     { 
//     description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0 
//     } 
//     = {} ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// })