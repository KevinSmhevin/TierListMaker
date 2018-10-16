import React from 'react';
import { connect } from 'react-redux';
import TierListRow from './TierListRow';
import UserTierListRow from './UserTierListRow';
import selectTierLists from '../selectors/tierLists'

export class MyTierLists extends React.Component {
    render() {
        return (
            <div>
                <h2>Used Tier Lists</h2>
                {
                    this.props.userTierList.length === 0 ? (
                        <p>No Used Tier List</p>
                    ) : (
                        this.props.userTierList.map((userTierList) => {
                            return <UserTierListRow key={userTierList.tierListId} {...userTierList} />
                        })
                    )
                }
                <h2>Tier List Templates</h2>
                {
                    this.props.tierLists.length === 0 ? (
                        <p>No Tier List</p>
                    ) : (
                        this.props.tierLists.map((tierList) => {
                            return <TierListRow key={tierList.id} {...tierList} />
                        })
                    )
                }
            </div>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        tierLists: selectTierLists(state.tierList, state.filters),
        userTierList: state.userTierList
    }
}

export default connect(mapStateToProps)(MyTierLists)