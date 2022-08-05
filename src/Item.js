import React from 'react';
import { useState } from 'react';
import './Item.css';

const Item = ({item, handleToggle, handleItemRemove, handleLabelChange}) => {
  const [itemInputValue, setItemInputValue] = useState('');

  const handleCheckboxClick = (event) => {
    handleToggle(event.currentTarget.closest('.item').dataset.id);
  }

  const handleLabelClick = (event) => {
    if (event.detail === 2) {
      const tgtParent = event.target.parentNode;

      tgtParent.classList.add('item__container--hidden');
      tgtParent.nextSibling.classList.add('item__edit--visible');
      tgtParent.nextSibling.focus();

      setItemInputValue(item.taskName);
    }
  }

  const handleLabelBlur = (event) => {
    const editedItemIndex = parseInt(event.target.parentNode.dataset.id);

    event.target.previousSibling.classList.remove('item__container--hidden');
    event.target.classList.remove('item__edit--visible');

    handleLabelChange(editedItemIndex, event);
  }

  const handleEnterKeyDown = (event) => {
    if (event.code === 'Enter') {
      const editedItemIndex = parseInt(event.target.parentNode.dataset.id);

      handleLabelChange(editedItemIndex, event);
    }
  }

  const handleItemChange = (event) => {
    setItemInputValue(event.target.value);
  };

  return (
    <li data-id={item.id} data-index={item.index} data-testid='toDoItem' className={item.complete ? 'item item--done' : 'item'} >
      <div className='item__container'>
        <input
          className='item__checkbox'
          type='checkbox'
          checked={item.complete ? 'checked' : false}
          onChange={handleCheckboxClick}
          title='Пазначыць як зробленае'
        />
        <label className='item__label' onClick={handleLabelClick}>{item.taskName}</label>
        <button className='remove' type='button' onClick={handleItemRemove}>Выдаліць</button>
      </div>
      <input
        type='text'
        className='item__edit'
        onBlur={handleLabelBlur}
        onKeyDown={handleEnterKeyDown}
        onChange={handleItemChange}
        value={itemInputValue}
      />
    </li>
  );
};

export default Item;