import React from 'react';
import uuid from 'uuid'
import { connect } from 'react-redux';
import TierListRow from './TierListRow';
import UserTierListRow from './UserTierListRow';

export class CombinedList extends React.Component {
    render() {
        return (
            <div className="combined-tier-list-container">
            <div className="combined-tier-list-box">
                <h2 className="box-title"><i className="fas fa-th-large"></i> Templates</h2>
                <p>Create your own tier list from scratch!</p>
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
                <div className="combined-tier-list-box">
                <h2 className="box-title"><i className="fas fa-bars"></i> Tier lists</h2>
                <p>Use and rank your own tier list!</p>
                {
                    this.props.userTierList.length === 0 ? (
                        <p>No Tier Lists</p>
                    ) : (
                        this.props.userTierList.map((userTierList) => {
                                return <UserTierListRow key={uuid()} {...userTierList} />
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
    startCreateTierList: (tierList) => dispatch(startCreateTierList(tierList))
});

export default connect(mapStateToProps, mapDispatchToProps)(CombinedList)