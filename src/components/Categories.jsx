import React from 'react'

const Categories = ({items, onClick}) => {
    return (
        <div className='categories'>
            <ul>
                <li onClick={onClick} className='active'>Все</li>
                {items.map((item, index)=><li key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories
