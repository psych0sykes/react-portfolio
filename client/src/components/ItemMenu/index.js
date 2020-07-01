import React, {useState} from 'react';
import './style.css';

function ItemMenu(props) {

    const [moveMenuClass, setMoveMenuClass] = useState("");
    const [menuHasMoved, setMenuHasMoved] = useState(false);

    // Get Array of Items from props.items

    const itemMenuClass = "itemMenu " + moveMenuClass;
    
    function moveMenu(id,color){
        console.log("move")
        if(!menuHasMoved){
            console.log("moving");
            setMoveMenuClass("moveMenu");
            props.show(id, color);
            setMenuHasMoved(true);
        }
        else{
            console.log("already moved")
            props.show(id, color);
        }
    }

    // Pick Color
    // Change the colors in the color array!
    const colorArray = [
        "#000000","#666666","#999999"
    ];
    const colorfulArray = [
        // "#CFEBDF","#E2FADB","#DBEFBC","#9BC4CB" old green colors
        "#e0c7ab","#c7c3bf","#ebddc0"
    ];
    
    var colorCount = 0;

    function pickColor(array) {
        // console.log("color count: " + colorCount)
        if(colorCount >= (array.length - 1)){
            colorCount = 0;
            return(array[colorCount]);
        }
        else {
            colorCount++;
            return(array[colorCount]);
        };
    };

    const menuItems = props.items.map((item,index) => {

        let newColor = pickColor(colorfulArray)

        return (
            <div key={item.id} style={{backgroundColor: newColor}} className='menuItem' onClick={() => moveMenu(index, newColor)}>
                <p>{item.title}</p>
            </div>
        );
    })

    return(
    <div className={itemMenuClass}>{menuItems}</div>
    )
};

export default ItemMenu;