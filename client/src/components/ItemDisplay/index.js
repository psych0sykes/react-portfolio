import React from 'react';
import './style.css';

function ItemDisplay(props) {

    function ImageOrColor(props){
        switch(props.icon){
            case 'image':
                return <div className='imageIcon'><img src={props.image}/></div>
            case 'color':
                return <div className='colorIcon' style={{backgroundColor: props.itemColor}}></div>
        }
    }
    
    function openLink(url){
        window.open(url, '_blank')
    }

    function URLButton(props){

        if(props.url){
        return (
            <button onClick={() => openLink(props.url)}>
                {props.children}
            </button>
        )}
        else{
            return <div/>
        }
    }

    return(
        <div className='ItemDisplay'>
            <div className='itemIcon'>
                <ImageOrColor icon={props.item.background[0]} itemColor={props.itemColor} image={props.item.background[1]}/>
            </div>
            <div className='itemContent'>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
                <URLButton url={props.item.url}>{props.item.urlText}</URLButton>
            </div>
        </div>
    )
};

export default ItemDisplay;