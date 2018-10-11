import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filters';

export class TierListFilter extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.props.filters}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(TierListFilter);