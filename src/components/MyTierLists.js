import React from 'react';
import { connect } from 'react-redux';
import TierListRow from './TierListRow';
import selectTierLists from '../selectors/tierLists'

export class MyTierLists extends React.Component {
    render() {
        return (
            <div>
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
        tierLists: selectTierLists(state.tierList, state.filters)
    }
}

export default connect(mapStateToProps)(MyTierLists)