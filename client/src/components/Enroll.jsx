import React from 'react'
import "./enroll.css"
function Enroll() {
    return (
        <>
            <div className='body'>
                <div className="banner">
                    <div className="slider" style={{"--quantity":10}}>
                        <div className="item" style={{"--position":8}}><img src="1.jpg" alt="1"/></div>
                        <div className="item" style={{"--position":6}}><img src="2.jpg" alt="2"/></div>
                        <div className="item" style={{"--position":10}}><img src="33.jpg" alt="3"/></div>
                        <div className="item" style={{"--position":4}}><img src="4.jpg" alt="4"/></div>
                        <div className="item" style={{"--position":9}}><img src="5.jpg" alt="5"/></div>
                        <div className="item" style={{"--position":2}}><img src="6.jpg" alt="6"/></div>
                        <div className="item" style={{"--position":7}}><img src="7.jpg" alt="7"/></div>
                        <div className="item" style={{"--position":1}}><img src="8.jpg" alt="8"/></div>
                        <div className="item" style={{"--position":5}}><img src="9.jpg" alt="9"/></div>
                        <div className="item" style={{"--position":3}}><img src="10.jpg" alt="10"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enroll