import React from 'react';
import './Item.css';

const Item = ({item, handleToggle}) => {
  const handleClick = (event) => {
    event.preventDefault()
    handleToggle(event.currentTarget.dataset.id)
  }

  return (
    <li data-id={item.id} className={item.complete ? 'form__item form__item--done' : 'form__item'} onClick={handleClick}>
      {item.task}
    </li>
  );
};

export default Item;