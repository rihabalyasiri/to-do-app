import React from 'react';

const AddForm = (props) => {
    return (
        <div className='add-do-block'>
            <input type="text" name="" id="" className='add-do-text' onChange={props.addText} value={props.doText} />
            <input type="submit" value="Submit" className='submit-btn' onClick={props.addDo} />
        </div>
    );
}

export default AddForm;