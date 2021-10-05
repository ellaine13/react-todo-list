import React from 'react';
import Item from './Item';
import './ToDoList.css';

const ToDoList = ({ toDoList, handleToggle, handleUnfinished, handleItemRemove, handleLabelChange }) => {
  const undoneItemsCount = toDoList.reduce(( acc, current ) => current.complete === false ? ++acc : acc, 0);

  const handleFilterClick = (event) => {
    if (!event.target.classList.contains('form__btn--current')) {
      Array.from(document.querySelectorAll('.form__btn')).forEach((el) => el.classList.remove('form__btn--current'));
      event.target.classList.add('form__btn--current');

      if (event.target.classList.contains('form__btn--active')) {
        handleUnfinished();
      }
    }
  }

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
              handleItemRemove={handleItemRemove}
              handleLabelChange={handleLabelChange}
            />
          )
        })}
      </ul>
      <footer className='form__footer'>
        <span className='form__counter'>Засталося зрабіць: {undoneItemsCount}</span>
        <div className='form__filters'>
          <button className='form__btn form__btn--current' onClick={handleFilterClick}>Усе</button>
          <button className='form__btn form__btn--active' onClick={handleFilterClick}>Актыўныя</button>
          <button className='form__btn form__btn--done' onClick={handleFilterClick}>Зробленыя</button>
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
