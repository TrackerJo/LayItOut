

import React from 'react';

import './inventory_item_tile.css';
import { Item } from '../constants';
import TrashIcon from '../assets/trash.png';

type InventoryItemProps = {
    item: Item;
    onSelect: (item: Item) => void;
    canDelete?: boolean;
    onDelete?: (item: Item) => void;
};
function InventoryItemTile({ item, onSelect, canDelete, onDelete }: InventoryItemProps) {
    return (<div key={item.name} className='inventory-item' onClick={() => {
        onSelect(item);


    }}
    ><div className='inventory-item-display'>

            <img src={item.icon} alt="icon" style={{ width: `${item.cellsLong * 10}px`, height: `${item.cellsTall * 10}px` }} className='inventory-icon-img' />
            <p>{item.name}</p>
            <p className="quantity">{item.cellsLong}ft x {item.cellsTall}ft</p>
            <br />
            {canDelete && onDelete ? <img className='delete-inventory-item-img' onClick={(e) => {
                e.stopPropagation();
                if (window.confirm("By clicking OK, you will delete this item. Are you sure?")) {

                    onDelete(item);

                }
            }} src={TrashIcon} /> : null}

        </div></div>);
}

export default InventoryItemTile;