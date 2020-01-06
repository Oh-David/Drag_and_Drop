import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

// Styling for sub containers
const Container = styled.div`
  width: 33.3%;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragginOver ? 'lightblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable 
          droppableId={this.props.column.id}
          isDropDisabled={this.props.isDropDisabled}
          // type={this.props.column.id === 'column-3' ? 'Installed Roles' : 'active'}
        >
          {(provided, snapshot) => (
            <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDragginOver={snapshot.isDraggingOver}
                > 
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}