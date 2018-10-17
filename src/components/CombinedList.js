import React from 'react';
import { connect } from 'react-redux';
import TierListRow from './TierListRow';
import UserTierListRow from './UserTierListRow';
import { startGetAllUsersTierList } from '../actions/tierList'

export class CombinedList extends React.Component {
    onClick = () => {
        this.props.startGetAllUsersTierList()
    }
    render() {
        return (
            <div className="combined-tier-list-container">
                <div className="combined-tier-list-box">
                <h2 className="box-title">Tier lists</h2>
                {
                    this.props.userTierList.length === 0 ? (
                        <p>No Tier Lists</p>
                    ) : (
                        this.props.userTierList.map((userTierList) => {
                                return <UserTierListRow key={userTierList.tierListId} {...userTierList} />
                        })
                    )
                }
                </div>
                <div className="combined-tier-list-box">
                <h2 className="box-title">Templates</h2>
                {
                    this.props.tierLists.length === 0 ? (
                        <p>No Tier List Templates</p>
                    ) : (
                        this.props.tierLists.map((tierList) => {
                            return <TierListRow key={tierList.id} {...tierList} />
                        })
                    )
                }
                </div>
            </div>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        tierLists: state.tierList,
        userTierList: state.userTierList,
    }
}

const mapDispatchToProps = (dispatch) => ({
    startCreateTierList: (tierList) => dispatch(startCreateTierList(tierList)),
    startGetAllUsersTierList: () => dispatch(startGetAllUsersTierList())
});

export default connect(mapStateToProps, mapDispatchToProps)(CombinedList)