import React, { useState } from 'react';

export default function InputField({tripName, label}) {
    const [state, setState] = useState('')
    return (
        <div>
            <label>{label}</label>
            <input type='text' value={state} name={'tripName'} onChange={(e) => setState(e.target.value)} />
            
        </div>
    )
}