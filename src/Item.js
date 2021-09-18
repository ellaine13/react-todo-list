import React from 'react';
import './Item.css';

const Item = ({item, handleToggle, handleItemRemove}) => {
  const handleItemClick = (event) => {
    handleToggle(event.currentTarget.closest('.item').dataset.id);
  }

  const handleLabelClick = (event) => {
    event.stopPropagation();

    if (event.detail === 2) {
      event.target.parentNode.classList.add('item__container--hidden');
      event.target.parentNode.nextSibling.classList.add('item__edit--visible');
      event.target.parentNode.nextSibling.focus();
    }
  }

  const handleLabelBlur = (event) => {
    event.target.previousSibling.classList.remove('item__container--hidden');
    event.target.classList.remove('item__edit--visible');
  }

  return (
    <li data-id={item.id} className={item.complete ? 'item item--done' : 'item'} >
      <div className='item__container'>
        <input
          className='item__checkbox'
          type='checkbox'
          checked={item.complete ? 'checked' : false}
          onClick={handleItemClick}
        />
        <span className='item__label' onClick={handleLabelClick}>{item.taskName}</span>
        <button className='remove' type='button' onClick={handleItemRemove}>Выдаліць</button>
      </div>
      <input
        type='text'
        className='item__edit'
        value={item.taskName}
        onBlur={handleLabelBlur}
      />
    </li>
  );
};

export default Item;