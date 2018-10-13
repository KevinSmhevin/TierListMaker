import React from 'react';
import { connect } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
background-color: white;
`;

export class Competitor extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.id} index={this.props.index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                    >
                        {this.props.competitor}
                    </Container>
                )}
            </Draggable>
        )
    }
}

const mapStateToProps = (state) => ({
    tierList: state.tierList.find((tierList) => tierList.id )
});

export default connect(mapStateToProps)(Competitor)