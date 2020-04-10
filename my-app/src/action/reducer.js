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
        // 添加数据
        case actions.addDataList :{
            const arr1 = Object.assign({}, state, { toDoList: [...state.listname, state.id], id:textId ++ });
            return arr1
        }    
        // 删除数据
        case actions.delDataList :{
            const arr2 = state.toDoList.filter((item)=>{
                return item.id !== action.id});
            return Object.assign({},sate,{id : arr2[action.id],index : action.index})
        }
        // 查找数据
        case actions.searchList :{
            const arr3 =state.showList.filter((item,i) => {
                if(item.listname !== action.listname){
                    return alert('未添加')
                }               
                return state.toDoList.listname
            });
            return  Object.assign({},sate,{listname : arr3[action.listname]},{showList : [...sate.index]})
        }
        // 返回数据
        case actions.backDataList :{
            const arr4 = Object.assign({showList : [...sate.listname]}, state, { toDoList: [...state.listname, state.id], id:textId ++ });
            return arr4
        }
        // input输入
        case actions.listInput :{
            if(e.target.className === "add"){Object.assign({},state, {input:e.action.value})
            }
            else if(e.target.className === "search"){Object.assign({},state, {search:e.action.value})
            };
            return [...state.input.value]
        }
        default :
            return state;
    }
}
export {appReducer}