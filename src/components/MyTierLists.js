import React from 'react';
import { connect } from 'react-redux';
import SingleTierList from './SingleTierList';
import selectTierLists from '../selectors/tierLists'
import { startGetAllTierList } from '../actions/tierList';

export class MyTierLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.setState(this.props.startGetAllTierList)
    }
    render() {
        return (
            <div>
                {
                    this.props.tierList.length === 0 ? (
                        <p>No Tier List</p>
                    ) : (
                        this.props.tierList.map((tierList) => {
                            return <SingleTierList key={tierList.id} {...tierList} />
                        })
                    )
                }
            </div>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        tierList: [{key: 'fkdsnfsd', title: 'League'}]
        // tierList: selectTierLists(state.tierLists, state.filters)
    }
}

const mapDispatchToProps = (state) => {
    startGetAllTierList: () => dispatch(startGetAllTierList)
}


export default connect(mapStateToProps, mapDispatchToProps)(MyTierLists)