import *as actions from './action'


// 初始化
const initialState = {
    toDoList:[],
    showList:[],
    data:[],
    input:'',
    id : '',
    listname: ''
}

// reducer类
const appReducer = (state = initialState ,action) => {
    switch(action.type){
        // 添加数据
            case actions.addDataList :{ 
                return  Object.assign({}, state, { toDoList: [...state.listname, state.id], id:textId ++ });
                }    
        // 删除数据
            case actions.delDataList :{
                return Object.assign({},sate,{id : action.id,index : action.index})
                }
        // 查找数据
            case actions.searchList :{
                return  Object.assign({},sate,{listname : action.listname},{showList : [...sate.index]})
                }
        // 返回数据
            case actions.backDataList :{ 
                return Object.assign({showList : [...sate.listname]}, state, { toDoList: [...state.listname, state.id], id:textId ++ });
                }
        // input输入
            case actions.listInput :{
                return Object.assign({},state, {input:e.action.value},{search:e.action.value})
                }
            default :
                return state;
        }
    }
export {appReducer}