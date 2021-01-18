import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// local imports
import CityItem from '../CityItem';
import { changeCitiesOrder } from '../../redux/actions/citiesActions';

const ItemList = ({ items, timer }) => {
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };

  const [list, setList] = useState([]);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const dispatch = useDispatch();

  // onDragStart fires when an element
  // starts being dragged
  const onDragStart = event => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });

    // Note: this is only for Firefox.
    // Without it, the DnD won't work.
    event.dataTransfer.setData('text/html', '');
  };

  // onDragOver fires when an element being dragged
  // enters a droppable area.
  const onDragOver = event => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the droppable area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = event => {
    setList(dragAndDrop.updatedOrder);
    dispatch(changeCitiesOrder(dragAndDrop.updatedOrder));

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  useEffect(() => {
    setList(items);
  }, [items]);

  return (
    <ul className='list-group'>
      {list.map((item, index) => {
        const getListItemClassNames = i => {
          return `list-group-item
              ${
                dragAndDrop && dragAndDrop.draggedTo === Number(i)
                  ? ' dropArea'
                  : ''
              }
              ${
                dragAndDrop.isDragging && dragAndDrop.draggedFrom === Number(i)
                  ? ' active'
                  : ''
              }`;
        };

        const listItemClassNames = getListItemClassNames(index);

        return (
          <li
            key={index}
            data-position={index}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}
            className={listItemClassNames}
            style={{
              cursor:
                dragAndDrop.isDragging &&
                dragAndDrop.draggedFrom === Number(index)
                  ? 'default'
                  : 'grab',
            }}
          >
            <CityItem item={item} timer={timer} />
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
