import React from 'react';




const Do = (props) => {

    return (
        <div className='do-block '>
            <div className='text-block'>
                <input type="checkbox" name="" id="" className='check-do' onClick={props.isComp} />
                <p className={props.addClass} placeholder='To Do....'>{props.task}</p>

            </div>
            <i className="fas fa-trash-alt" onClick={props.del} ></i>
        </div>);
}


export default Do;
