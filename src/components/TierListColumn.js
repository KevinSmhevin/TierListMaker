import React from 'react';
import { connect } from 'react-redux';

export class TierListColumn extends React.Component {
    render() {
        return this.props.column.title;
    }
}

