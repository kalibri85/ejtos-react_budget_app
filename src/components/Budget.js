import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, Currency } = useContext(AppContext);
    const [bud, setBudget] = useState(budget);
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}</span>
            <input
                        required='required'
                        type='number'
                        id='bud'
                        value={bud}
                        style={{size: 10}}
                        min = "0"
                        max = "20000"
                        step = "10"
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;

