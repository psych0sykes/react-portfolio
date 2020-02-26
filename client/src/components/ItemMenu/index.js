import React from 'react';
import './style.css';

function ItemMenu(props) {

    // Get Array of Items from props.items

    // Pick Color
    // Change the colors in the color array!
    const colorArray = [
        "#F8EA8C","#FF4500","#F4A843","#F7DE3D"
    ];
    var colorCount = 0;
    
    function pickColor(array) {
        console.log("color count: " + colorCount)
        if(colorCount >= (array.length - 1)){
            colorCount = 0;
            return(array[colorCount]);
        }
        else {
            colorCount++;
            return(array[colorCount]);
        };
    };

    const menuItems = props.items.map((item) => {
        return (
            <div key={item.id} style={{backgroundColor: pickColor(colorArray)}} className='menuItem'>{item.title}</div>
        );
    })

    return(
    <div className="itemMenu">{menuItems}</div>
    )
};

export default ItemMenu;