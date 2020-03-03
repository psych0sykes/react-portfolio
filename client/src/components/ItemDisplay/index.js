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
    
    function openLink(url){
        window.open(url, '_blank')
    }

    return(
        <div className='ItemDisplay'>
            <div className='itemIcon'>
                <ImageOrColor icon={props.item.background[0]} itemColor={props.itemColor}/>
            </div>
            <div className='itemContent'>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
                <button onClick={() => openLink(props.item.url)}>
                    {props.item.urlText}
                </button>
            </div>
        </div>
    )
};

export default ItemDisplay;