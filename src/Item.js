import React from 'react';
import './Item.css';

const Item = ({item, handleToggle}) => {
  const handleCheckboxClick = (event) => {
    handleToggle(event.currentTarget.parentNode.dataset.id)
  }

  return (
    <li data-id={item.id} className={item.complete ? 'item item--done' : 'item'} >
      <input type='checkbox' className='item__checkbox' onClick={handleCheckboxClick} />
      <span className='item__label'>{item.taskName}</span>
      <button type='button' className='remove'>Выдаліць</button>
    </li>
  );
};

export default Item;