import React from 'react';
import './Item.css';

const Item = ({item, handleToggle}) => {
  const handleClick = (event) => {
    event.preventDefault()
    handleToggle(event.currentTarget.dataset.id)
  }

  return (
    <li data-id={item.id} className={item.complete ? 'item item--done' : 'item'} onClick={handleClick}>
      <input type='checkbox' className='item__checkbox'></input>
      <span className='item__label'>{item.task}</span>
      <button type='button' className='remove'>Выдаліць</button>
    </li>
  );
};

export default Item;