


// 添加数据action 
let textId = 0
export function addData () {
    return (dispatch,getState) =>    
        {let {listname} = getState().addDataList;
        toDoLis.push(() =>{
            dispatch({
                type:addDataList,
                id:textId ++,
                listname})
            })        
        }
    }
// 删除数据action 
export function delData() {
    return (dispatch,getState) => 
        {let {index} = getState().delDataList;
        state.toDoList.filter((item)=>{
            return item.id !== action.id});
        dispatch({
            type:delDataList,
            index})
        }
    }
// 查找数据action 
export function  search() {
    return (dispatch,getState) => 
        {let {listname} = getState().searchList;
        state.showList.filter((item,i) => {
            if(item.listname !== action.listname){
                return alert('未添加')
            }               
            return state.toDoList.listname});
        dispatch ({
            type:searchList,
            listname,
            index})
        }
    }
// 返回数据action 
export function  backData () {
    return (dispatch,getState)=>
    {let {listname}= getState().backDataList;
        dispatch
        ({type:backDataList,
        listname})
    }
}
// input 输入
export function onChange (){
    return (dispatch,getState) => 
        {let {e} = getState().searchList;
        if(e.target.className === "add"){
            getState({input:e.target.value})
        }
        else if(e.target.className === "search"){
            getState({search:e.target.value})
            };
        dispatch({
            type:listInput,
            value:e.target.value})
        }
    }

const ns = namespace('appRedux')
export const addDataList = ns( 'addDataList')
export const delDataList = ns ('delDataList')
export const searchList = ns ('searchList' ) 
export const backDataList = ns ('backDataList')
export const listInput = ns ('listInput')