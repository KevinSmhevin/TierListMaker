import React from 'react';
import { connect } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
border-radius: 5%;
margin-right: 8px;
padding: 12px;
margin-bottom: 8px;
background-color: ${props => (props.isDragging ? 'WhiteSmoke' : 'white')}
`;

export class Competitor extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
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