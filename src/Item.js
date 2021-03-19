import React from 'react';

const Item = ({item}) => {
  return (
    <li>
      {item.task}
    </li>
  );
};

export default Item;