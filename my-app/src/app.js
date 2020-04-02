import React from 'react';
// import '../css/app.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        data : [],
        showData:[],
        input : '',
        search : ''
      };
      this.addData = this.addData.bind(this);
      this.search = this.search.bind(this);
      this.onChange = this.onChange.bind(this);
      }
   // 添加数据
  addData(){
  const arr = this.state.data
  const arr2 = this.state.showData
  arr.push(this.state.input)
  arr2.push(this.state.input)
  this.setState({
    data:arr,
    showData:arr2})
  }
  // 删除数据
  delData =(index)=>{
    const arr = this.state.data
    arr.splice(index,1)
    this.setState({data:arr})
  }
  // 搜索数据
  search(){
    const arr = this.state.showData.filter((item,i)=>{
      return item == this.state.search
    })
    if(arr.length == 0){
       alert('未添加')
    }else{
      this.setState({
        showData:arr
      })
    }
  }
 
  onChange(i){
    if(i.target.className === "add"){
      this.setState({
        input:i.target.value
      })
    }else if(i.target.className === "search"){
      this.setState({
        search:i.target.value
      })
    }
    
  }
  render(){
    function todoList(props,delData){
    return(
      <ul>
        {
          props.map((item,i)=>{
            return (
              <li key={i}>
                <label>{item}</label>
                <button onClick={()=>delData(i)}>delete</button>
              </li>
            )
          })
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
          {todoList(this.state.showData,this.delData)}
      </div>
    )
  }
}

export default App;