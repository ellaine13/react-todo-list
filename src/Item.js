import React from 'react';
import './Item.css';

const Item = ({item, handleToggle, handleItemRemove, handleLabelChange}) => {
  const handleCheckboxClick = (event) => {
    handleToggle(event.currentTarget.closest('.item').dataset.id);
  }

  const handleLabelClick = (event) => {
    if (event.detail === 2) {
      event.target.parentNode.classList.add('item__container--hidden');
      event.target.parentNode.nextSibling.classList.add('item__edit--visible');
      event.target.parentNode.nextSibling.focus();
    }
  }

  const handleLabelBlur = (event) => {
    const editedItemIndex = parseInt(event.target.parentNode.dataset.index);

    event.target.previousSibling.classList.remove('item__container--hidden');
    event.target.classList.remove('item__edit--visible');

    handleLabelChange(editedItemIndex, event);
  }

  return (
    <li data-id={item.id} data-index={item.index} className={item.complete ? 'item item--done' : 'item'} >
      <div className='item__container'>
        <input
          className='item__checkbox'
          type='checkbox'
          checked={item.complete ? 'checked' : false}
          onChange={handleCheckboxClick}
        />
        <label className='item__label' onClick={handleLabelClick}>{item.taskName}</label>
        <button className='remove' type='button' onClick={handleItemRemove}>Выдаліць</button>
      </div>
      <input
        type='text'
        className='item__edit'
        onBlur={handleLabelBlur}
      />
    </li>
  );
};

export default Item;