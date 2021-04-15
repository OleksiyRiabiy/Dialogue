import React, {useState, useCallback, useEffect} from 'react';

const Form = props => {
    const [ enteredName, setEnteredName] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        props.onAddSliderImage({name: enteredName});
    };
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" id="name" 
                    value={enteredName}
                    onChange={event => {
                        setEnteredName(event.target.value);
                    }}
                />
                </div>
                <div>
                    <button type="submit">Add Image</button>
            </div>
            </form>
        </div>
    );
}

export default Form;