import React from 'react';
import Item from './Item';
import './ToDoList.css';

const ToDoList = ({ toDoList, handleToggle, handleUnfinished }) => {
  return (
    <>
      <ul className='form__list'>
        {toDoList.map(item => {
          return (
            <Item item={item} key={item.id + item.taskName} handleToggle={handleToggle} handleUnfinished={handleUnfinished} />
          )
        })}
      </ul>
      <footer className='form__footer'>
        <span className='form__counter'>Засталося зрабіць: ?</span>
        {toDoList.length > 0
          ? <button className='form__clear' onClick={handleUnfinished}>Выдаліць зробленае</button>
          : false
        }
      </footer>
    </>
  );
};

export default ToDoList;
