import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Styling for tasks within sub containers 
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => 
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDraggin 
        ? 'skyblue' 
        : 'white'};

  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === 'task-1';
    return (
      <Draggable draggableId={this.props.task.id} 
      index={this.props.index}
      isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDraggin={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            
            {/* Allows only the handle to be a click draggable item */}
            <Handle {...provided.dragHandleProps} />
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}