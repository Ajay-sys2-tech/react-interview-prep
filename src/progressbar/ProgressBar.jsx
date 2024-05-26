import React, {useEffect, useState} from 'react'
import './styles.css';



const ProgressBar = () => {
    const [ width, setWidth ] = useState(0);
    // useEffect(() => {
    //     setInterval(() => {
    //         setWidth(prev => prev+1)
    //     }, 1000)
    // },[])
    const styles = {
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        progress: {
            position: 'relative',
            width: '80%',
            height: '30px',
            backgroundColor: 'transparent',
            borderRadius: '20px',
            border: '2px solid black',
            overflow: 'hidden',
            marginTop: '30px',
            marginBottom: '30px',
        },
        progressInner: {
            position: 'absolute',
            width: `${width}%`,
            height: '100%',
            backgroundColor: 'green',
            // backgroundColor: rgb(),
            zIndex: '1',
        },

        progressValue: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            // transform: 'translate(-1%, -80%)',
            color: width > 48 ? 'white' : 'black',
            fontSize: '15px',
            // fontWeight: 'bold',
            textAlign: 'center',
            paddingTop: '5px',
            zIndex: '3',
           
        }
        
    }   
    
        
    const handleProgress = () => {
        setInterval(() => {
            setWidth(width => Math.min(width+1, 100))
        }, 100)
    }
    
  return (
    <div className='container' >
        <div className='progress' >
            <div className='progressInner' style={{width: `${width}%`,}}/>
            <div className='progressValue' >{width} %</div>
        </div>
        <button onClick={handleProgress}>Start</button>
    </div>
  )
}

export default ProgressBar;