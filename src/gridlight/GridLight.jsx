import React, { useState } from 'react';
import './styles.css';


const Cell = ({filled, onClick, isDisabled}) => {
    return (
        <button 
            disabled={isDisabled}
            className={filled? 'cell cell-activated' : 'cell'}
            onClick={onClick}
        />
    )
}
const GridLight = () => {
    const [order, setOrder ] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);

    const config = [
        [1,1,1],
        [1,0,1],
        [1,1,1]
    ];

    const deactiveCells = () => {
        setIsDeactivating(true);
        const timer = setInterval(() => {
            setOrder((origOrder) => {
                const newOrder = origOrder.slice();
                newOrder.pop();

                if(newOrder.length === 0){
                    clearInterval(timer);
                    setIsDeactivating(false);
                }
                return newOrder;
            })
        }, 300)
    }

    const activateCells = (index) => {
        const newOrder = [...order, index];
        setOrder(newOrder);

        console.log(newOrder);

        if(newOrder.length === config.flat(1).filter(Boolean).length)
            deactiveCells();
    }



  return (
    <div className='wrapper'>
        <div 
            className='grid'
            style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}
        >
            {
                config.flat(1).map((value, index) => {
                    return value ? <Cell 
                        key={index} 
                        isDisabled={order.includes(index) || isDeactivating}
                        onClick={() => activateCells(index)}
                        filled={order.includes(index)}
                        /> : <span />
                })
            }
        </div>
    </div>
  )
}

export default GridLight