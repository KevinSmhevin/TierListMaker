import React from 'react'
import { connect } from 'react-redux';
import TierListCreateForm from './TierListCreateForm';
import { startUpdateTierList } from '../actions/tierList';

export class UpdateTierListPage extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit = (tierList) => {
        this.props.startUpdateTierList(this.props.tierList.id, tierList);
        this.props.history.push('/');
      };
        render() {
            return (
                <div>
                    <TierListCreateForm 
                        tierList={this.props.tierList} 
                        onSubmit={this.onSubmit}
                    />
                </div>
            )
        }
    }   
    const mapStateToProps = (state, props) => ({
        tierList: state.tierList.find((tierList) => {
            return tierList.id === props.match.params.id
            }),
            auth: state.auth 
    })
    const mapDispatchToProps = (dispatch) => ({
        startUpdateTierList: (id, tierList) => dispatch(startUpdateTierList(id, tierList))
    });

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTierListPage);