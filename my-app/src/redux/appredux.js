import React from 'react';
// import todoList from './listredux';
import { bindActionCreators } from 'redux';
import * as actions from '../action/action';
import {connect} from 'react-redux'
// import {appReducer} from '../action/reducer'


class AppRedux extends React.Component{

    todoList(toDoList,delData){
        return(
            <ul>{
                toDoList.map(
                        (item,i)=>{
                            return (
                                <li key={item.i}>
                                    <label>{item.listname}</label>
                                    <button onClick={()=>delData(item.id)}>delete</button>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        );
    }
    
    render(){
        const {actions,toDoList} = this.props
        // console.log(this.props)
        return(
            <div className = 'App'>
                <h2 className = 'title'>TodoList和Search(redux)</h2>
                <input className='add' onChange={(i)=>actions.onChange(i)}></input>
                <button onClick={()=>actions.addData}>add</button>
                <input className='search' onChange={(i)=>actions.onChange(i)}></input>
                <button onClick={()=>actions.search}>search</button>
                <button onClick={()=>actions.backData}>back</button>
                {this.todoList(toDoList,actions.delData)}
            </div>
            )
        }
    }

export default connect (
    state =>state,
    dispatch => ({actions:bindActionCreators(actions,dispatch)})
)
 (AppRedux);