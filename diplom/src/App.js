import React, {useState} from 'react';
import './App.css';
import _ from 'lodash';
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';
import { v4 } from 'uuid';

const item = {
  id: v4(),
  name: 'clean up'
}

const item2 = {
  id: v4(),
  name: 'wash dishes'
}

function App() {
  const [text, setText] = useState();
  const [state, setState] = useState({
    'not started':{
      title: 'Not Started',
      items: [item]
    },
    'in progress':{
      title: 'In Progress',
      items: [item2]
    },
    'done':{
      title: 'Done',
      items: []
    }
  })

  const handleDragEnd = ({destination, source}) => {
    if(!destination) {
      return;
    }
    else if (
      destination.index===source.index && destination.droppableId === source.droppableId
    ){
      return;
    }
    else{
      const changeItem = {...state[source.droppableId].items[source.index]};
      setState(prev => {
        prev = {...prev}
        prev[source.droppableId].items.splice(source.index, 1)
        prev[destination.droppableId].items.splice(destination.index, 0, changeItem);
      })
    }
  }

  const addItem = () => {
    setState(prev => {
      return {
        ...prev,
        todo: {
          title: 'Not Started',
          items: [
            {
              id: v4(),
              name: text
            }, 
            ...prev.todo.items
          ]
        }
      }
    })
  }
  
  return (
    <div className="App">
      <div>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addItem}>Add</button>
      </div>
    <DragDropContext onDragEnd={handleDragEnd}>
      {_.map(state, (data, key) => {
          return (
            <div key = {key} className={'column'}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
              {(provided) => {
                return (
                  <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={'droppable-col'}
                  >
                    {data.items.map(( el, index)=>{
                      return(
                        <Draggable key={el.id} index={index} draggableId={el.id}>
                        {
                          (provided, snapshot) => {
                          return(
                            <div
                            className={`item ${snapshot.isDragging && 'dragging'}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            {el.name}
                            </div>
                          )
                        }
                      }
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )
              }}
              </Droppable>
            </div>    
          )
      })}
      </DragDropContext>
    </div>
  );
}

export default App;
