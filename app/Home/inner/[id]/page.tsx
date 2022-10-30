import React from 'react';

const Item = ({ params }: { params: { id: string }; }) => {
  return (<div>{params.id}</div>)
}

export default Item;

