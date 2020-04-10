import { Component } from "react"
import * as actions from '../action/action';

class listRedux extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {toDoList,delData}=this.props 
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
}
export default connect (
    state =>state,
    dispatch => ({actions:bindActionCreators(actions,dispatch)})
)
 (listRedux);