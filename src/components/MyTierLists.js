import React from 'react';
import { connect } from 'react-redux';
import SingleTierList from './SingleTierList';

export const MyTierLists = (props) => (
    <div>
        <h1>Assorted Tier List:</h1>
        {props.filters.text}
        {/* {props.tierList.length} */}
    </div>
)


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(MyTierLists)