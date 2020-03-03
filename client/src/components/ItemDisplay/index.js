import React from 'react';
import './style.css';

function ItemDisplay(props) {

    function ImageOrColor(props){
        switch(props.icon){
            case 'image':
                return <div className='imageIcon'>image</div>
            case 'color':
                return <div className='colorIcon' style={{backgroundColor: props.itemColor}}>color</div>
        }
    }

    return(
        <div className='ItemDisplay'>
            <div className='itemIcon'>
                <ImageOrColor icon={props.item.background[0]} itemColor={props.itemColor}/>
            </div>
            <div className='itemContent'>wow</div>
        </div>
    )
};

export default ItemDisplay;