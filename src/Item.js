import React from 'react';
import './Item.css';

const Item = ({item, handleToggle}) => {
  const handleItemClick = (event) => {
    handleToggle(event.currentTarget.dataset.id)
  }

  const handleItemRemove = (event) => {
    event.stopPropagation();
    console.log(item);
  }

  return (
    <li data-id={item.id} className={item.complete ? 'item item--done' : 'item'} onClick={handleItemClick}>
      <input type='checkbox' className='item__checkbox' checked={item.complete ? 'checked' : false} readOnly />
      <span className='item__label'>{item.taskName}</span>
      <button type='button' className='remove' onClick={handleItemRemove}>Выдаліць</button>
    </li>
  );
};

export default Item;