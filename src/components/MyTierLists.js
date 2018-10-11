import React from 'react';
import { connect } from 'react-redux';
import SingleTierList from './SingleTierList';
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
                            console.log(tierList)
                            return <SingleTierList key={tierList.key} {...tierList} />
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