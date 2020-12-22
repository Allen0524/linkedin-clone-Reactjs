import React from 'react';
import './InputOption.css';

function InputOption({Icon, title, color}) {
    return (
        <div className="inputoption">
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
