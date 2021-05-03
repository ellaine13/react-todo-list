import React from 'react';
import Item from './Item';
import './ToDoList.css';

const ToDoList = ({ toDoList, handleToggle, handleUnfinished }) => {
  return (
    <>
      <ul className='form__list'>
        {toDoList.map(item => {
          return (
            <Item item={item} key={item.id + item.task} handleToggle={handleToggle} handleUnfinished={handleUnfinished} />
          )
        })}
      </ul>
      <button onClick={handleUnfinished}>Выдаліць зробленае</button>
    </>
  );
};

export default ToDoList;
