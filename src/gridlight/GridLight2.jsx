import React, { useEffect, useState } from 'react'
import './styles2.css';
let selected = [];
let revColoring = false;

const revGridColoring = () => {
    console.log("reversing");
    
}

const Grid = ({id}) => {
    const [color, setColor ] = useState('white');

    const clickHandler = () => {
        let idxIfPresent = selected.indexOf(id);
        if(idxIfPresent !== -1){
            selected = selected.filter((id) => id !== selected[idxIfPresent] ? id : '');
        }
        else selected.push(id);
        setColor(prev => {
            return prev === 'white'? 'green' : 'white';
        });

        if(selected.length === 8){
            console.log("length achieved");
            revGridColoring();
        }
    }

  return (
    <div 
        className='grid' 
        onClick={clickHandler}
        style={{backgroundColor: `${color}`}}
        >
    </div>
  );
}

const InvisibleGrid = () => {
    return (
      <div className='invisbleGrid'>
      </div>
    );
  }

const GridRow = ({row, rowno}) => {
    return (
        <div className='row'>
            {row.map((cell, id) => {
                let idx = "" + rowno + "," + id;
                return cell === 1? <Grid id={idx} /> : <InvisibleGrid />;
            })}
        </div>
    );
}

const GridLight = () => {
    const arr = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

    const handleShow = () => {
        console.log(selected);
    }

    return (
        <div className='container'>
        <div className='box'>
            {arr.map((row, i)=> {
            return <GridRow row={row} rowno={i} />;
            })}
        </div>

        <button onClick={handleShow}>Show</button>
        </div>
    )
}

export default GridLight