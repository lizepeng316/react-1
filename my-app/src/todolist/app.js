import React from 'react';
// import todoList from 'list';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            showData:[],
            input : '',
            search : ''
        }
    }
    // 添加数据
    addData = () => {
        let {data,showData,input}  =this.state
        data.push(input)
        showData = data
        this.setState({
            data:data,
            showData:showData
        })
    }
    // 删除数据
    delData = (index) => {
            let {data} = this.state
            data.splice(index,1)
            this.setState({data:data})
        }
    // 搜索数据
    search =() => {
        const arr = this.state.showData.filter((item,i)=>{
            return item === this.state.search
            })
            if(arr.length === 0){
                alert('未添加')
            }
            else{
                this.setState({showData:arr})
            } 
    }
    // 返回原列表
    backData = () => {
            this.setState({showData : this.state.data})
        }

    onChange = (i) => {
        if(i.target.className === "add"){
                this.setState({input:i.target.value})
            }
        else if(i.target.className === "search"){
            this.setState({search:i.target.value})
            }
        }
    render(){
        function todoList(props,delData){
            return(
                <ul>{props.map(
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
        return(
            <div className = 'App'>
                <h2 className = 'title'>TodoList和Search</h2>
                <input className='add' onChange={this.onChange}></input>
                <button onClick={this.addData}>add</button>
                <input className='search' onChange={this.onChange}></input>
                <button onClick={this.search}>search</button>
                <button onClick={this.backData}>back</button>
                {todoList(this.state.showData,this.delData,this.backData)}
            </div>
            )
        }
    }

export default App;