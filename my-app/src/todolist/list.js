import React from 'react';
import { render } from '@testing-library/react';



render()
function todoList(props,delData){
    return(
    <ul>
        {
            props.map(
                (item,i)=>{
                return (
                <li key={i}>
                    <label>{item}</label>
                    <button onClick={()=>delData(i)}>delete</button>
                </li>
                )
                }
            )
        }
    </ul>
    );
}
export default todoList;