import React from 'react';
// import '../css/app.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        data : [],
        input : '',
        search:''
      };
      this.search = this.search.bind(this);
      this.onChange = this.onChange.bind(this);
      }

  // 删除数据
  delData =(index)=>{
    const arr = this.state.data
    arr.splice(index,1)
    this.setState({data:arr})
  }
  // 搜索数据
  search(){
    const arr = this.state.data;
    if(arr.indexOf(this.state.search)== -1){
      arr.push(this.state.search);
      this.setState({data:arr})

    }else{
      alert('已添加')
    }
    
  }
 
  onChange(i){
    if(i.target.className == "add"){
      this.setState({
        input:i.target.value
      })
    }else if(i.target.className == "search"){
      this.setState({
        search:i.target.value
      })
    }
    
  }
  // 渲染
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
          <input className='search' onChange={this.onChange}></input>
          <button onClick={this.search}>search</button>
          {todoList(this.state.data,this.delData)}
      </div>
    )
  }
}

export default App;