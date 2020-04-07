


// 添加数据action 
let textId = 0
export const addData = listname => {
    // console.log(123)
    return {
        type:addDataList,
        id:textId ++,
        listname
    }
}
// 删除数据action 
export const delData = id => {
    return {
        type:delDataList,
        id
    }
}
// 查找数据action 
export const  search =listname => {
    return {
        type:searchList,
        listname
    }
}
// 返回数据action 
export const  backData = listname => {
    return {
        type:backDataList,
        listname
    }
}
export const onChange =(e)=>{
    return{
        type:listInput,
        value:e.target.value
    }
}

export const addDataList = 'addDataList'
export const delDataList = 'delDataList'
export const searchList = 'searchList'
export const backDataList = 'backDataList'
export const listInput = 'listInput'