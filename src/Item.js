import React from 'react';
import './Item.css';

const Item = ({item, handleToggle}) => {
  const handleItemClick = (event) => {
    handleToggle(event.currentTarget.dataset.id)
  }

  return (
    <li data-id={item.id} className={item.complete ? 'item item--done' : 'item'} onClick={handleItemClick}>
      <input type='checkbox' className='item__checkbox' checked={item.complete ? 'checked' : false} readOnly />
      <span className='item__label'>{item.taskName}</span>
      <button type='button' className='remove'>Выдаліць</button>
    </li>
  );
};

export default Item;