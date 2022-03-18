import React, { useState } from 'react';
import Item from './Item';
import './ToDoList.css';

const FILTER_CAPTIONS = {
  all: 'Усе',
  active: 'Актыўныя',
  done: 'Зробленыя',
};

const FILTER_MAP = {
  [FILTER_CAPTIONS.all]: () => true,
  [FILTER_CAPTIONS.active]: task => !task.complete,
  [FILTER_CAPTIONS.done]: task => task.complete,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const ToDoList = ({ toDoList, handleToggle, handleUnfinished, handleItemRemove, handleLabelChange }) => {
  const undoneItemsCount = toDoList.reduce(( acc, current ) => current.complete === false ? ++acc : acc, 0);
  const thereAreDoneItems = toDoList.some(task => task.complete === true);
  const [itemsFilter, setItemsFilter] = useState(FILTER_CAPTIONS.all);

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === itemsFilter}
      setFilter={setItemsFilter}
    />
  ));

  function FilterButton(props) {
    const currentFilterBtn = props.isPressed ? 'form__btn--current' : '';

    return (
      <button
        type="button"
        className={`form__btn ${currentFilterBtn}`}
        onClick={() => props.setFilter(props.name)}
      >
        <span>{props.name}</span>
      </button>
    );
  }

  return (
    <>
      <ul className='form__list' data-testid='form-list'>
        {toDoList
          .filter(FILTER_MAP[itemsFilter])
          .map(item => {
            return (
              <Item
                item={item}
                key={item.id + item.taskName}
                handleToggle={handleToggle}
                handleItemRemove={handleItemRemove}
                handleLabelChange={handleLabelChange}
              />
            )
        })}
      </ul>
      <footer className='form__footer'>
        <span className='form__counter'>Засталося зрабіць: {undoneItemsCount}</span>
        <div className='form__filters'>
          {filterList}
        </div>
        <button
          type='button'
          className={
            (toDoList.length === 0 || !thereAreDoneItems)
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
