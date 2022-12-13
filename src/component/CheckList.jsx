import React, {useState} from 'react';
import './CheckList.css';

const CheckList = ()=>{
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([])
    const changeHandler = (event)=>{
        setInputValue(event.target.value);
    }
    const clickHandler=()=>{
        console.log("click")
        setItems(pre => [...pre, {title: inputValue, done: false, time:''}])
        setInputValue('')
    }

    const items_render = items.map((data, index)=>{
        return <div className="item" key={index}>
                {data.title}
                <div className='btn-group'>
                    <button className='item-btn'> Mark as Done</button>
                    <button className='item-btn'> Delete</button>
                </div>
                
            </div>
    })

    return <div className='checkList'>
        <div className='input-group'>
            <input className='input' type="text" placeholder='Add your task here...' onChange={changeHandler} value={inputValue}/>
            <button className='add-btn' onClick={clickHandler}>Add</button>
        </div>
        <div className='item-header'>
            <span>{`${items.length} items(s)`}</span> 
            <div>
                 <input type="checkbox" id='item-done'/>
                <label htmlFor="item-done">Show Done Items</label>
            </div>
           
        </div>
        {items_render}

    </div>
}

export default CheckList;