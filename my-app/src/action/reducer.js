import *as actions from './action'


// 初始化
const initialState = {
    toDoList:[],
    showList:[],
    input:''
}

// reducer类
const appReducer = (state = initialState ,action) => {
    // console.log(action.type)
    switch(action.type){
        case actions.addDataList :{

            return {
                ...state,
                toDoList:[...state.toDoList,{
                    id:action.textId,
                    listname : action.listname
                }]
            }    
        }
        case actions.delDataList :{
            return {
                ...state,
                toDoList:state.toDoList.filter((item)=>{
                return item.id !== action.id})
            }
        }
        case actions.searchList :{
            return {
                ...state,
                showList : state.showList.filter((item,i) => {
                    if(item.listname !== action.listname){
                        return alert('未添加')
                    }               
                    return state.toDoList.listname
                })
            }
        }
        case actions.backDataList :{
            return{
                ...state,
                toDoList:[...state.toDoList,{
                    id:action.textId,
                    listname : action.listname
                }]
            }
        }
        case actions.listInput :{
            return {
                ...state,
                input:action.value,
                seach:action.value
            }
        }
        default :
            return state;
    }
}
export {appReducer}