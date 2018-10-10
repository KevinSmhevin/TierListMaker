import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { startGetAllTierList } from '../actions/tierList';

export class TierListFilter extends React.Component {
    state = {};
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    render() {
        return (
            <div>
                <input 
                    type="text"
                    placeholder="filter"
                    onChange={this.onTextChange}
                />
                {/* <input 
                    type="checkbox"
                    value="My Tier Lists"
                    onChange={this.onMyTierListChange}
                /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    startGetAllTierList: () => dispatch(startGetAllTierList())
})

export default connect(mapStateToProps, mapDispatchToProps)(TierListFilter);