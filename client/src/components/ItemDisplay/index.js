import React from 'react';
import './style.css';

function ItemDisplay(props) {

    function ImageOrColor(props){
        switch(props.icon){
            case 'image':
                return <div>image</div>
            case 'color':
                return <div>color</div>
        }
    }

    return(
        <div className='ItemDisplay'>
            <div className='itemIcon'>
                <ImageOrColor icon={props.item.background[0]}/>
            </div>
            <div className='itemContent'>wow</div>
        </div>
    )
};

export default ItemDisplay;