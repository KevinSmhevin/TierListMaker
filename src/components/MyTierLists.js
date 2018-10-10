import React from 'react';
import { connect } from 'react-redux';
import SingleTierList from './SingleTierList';
import selectTierLists from '../selectors/tierLists'
import { startGetAllTierList } from '../actions/tierList';

const MyTierLists = (props) => (
    <div>
        {/* {
            props.tierList.length === 0 ? (
                <p>No Tier List</p>
            ) : (
                props.tierList.map((tierList) => {
                    return <SingleTierList key={tierList.id} {...tierList} />
                })
            )
        } */}
    </div>
)   

const mapStateToProps = (state) => {
    // return {
    //     tierList: selectTierLists(state.tierLists, state.filters)
    // }
}


export default connect(mapStateToProps)(MyTierLists)