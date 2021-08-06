import React from 'react';
import Item from './Item';
import './ToDoList.css';

const ToDoList = ({ toDoList, handleToggle, handleUnfinished }) => {
  return (
    <>
      <ul className='form__list'>
        {toDoList.map(item => {
          return (
            <Item
              item={item}
              key={item.id + item.taskName}
              handleToggle={handleToggle}
              handleUnfinished={handleUnfinished}
            />
          )
        })}
      </ul>
      <footer className='form__footer'>
        <span className='form__counter'>Засталося зрабіць: ?</span>
        <div className='form__filters'>
          <button className='form__btn'>Усе</button>
          <button className='form__btn'>Актыўныя</button>
          <button className='form__btn'>Зробленыя</button>
        </div>
        <button
          className={
            (toDoList.length === 0)
              ? 'form__clear form__clear--hidden'
              : 'form__clear'
          }
          onClick={handleUnfinished}>
          Выдаліць зробленае
        </button>
      </footer>
    </>
  );
};

export default ToDoList;
