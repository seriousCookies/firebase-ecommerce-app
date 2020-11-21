import React from 'react'
import ShopMen from '../../assests/day.png';
import ShopWomen from '../../assests/night.png';
import './styles.scss';
const Directory = () => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                className="item"
                style={{
                backgroundImage: `url(${ShopMen})`
                }}>
                    <a>Shop Men</a>
                </div>
                <div 
                className="item"
                style={{
                backgroundImage: `url(${ShopWomen})`
                }}>
                    <a>Shop Women</a>     
                </div>
            </div>

        </div>

    )
}

export default Directory
