import React from 'react';

export default function UserInputBox({type, placeholder}) {
    return (
        <div>
            <label htmlFor="">
                <input type={type} placeholder={placeholder}/>
            </label>
        </div>
    );
}