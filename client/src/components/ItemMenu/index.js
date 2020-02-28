import React from 'react';
import './style.css';

function ItemMenu(props) {

    // Get Array of Items from props.items

    // Pick Color
    // Change the colors in the color array!
    const colorArray = [
        "#000000","#666666","#999999"
    ];
    const colorfulArray = [
        "#CFEBDF","#E2FADB","#DBEFBC","#9BC4CB"
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
            <div key={item.id} style={{backgroundColor: pickColor(colorfulArray)}} className='menuItem'>
                <p>{item.title}</p>
            </div>
        );
    })

    return(
    <div className="itemMenu">{menuItems}</div>
    )
};

export default ItemMenu;