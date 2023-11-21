import React from "react"

class App extends React.Component {
  constructor(){
    super()
    this.state = {count:0}
  }

  increase=()=>{
    this.setState({count: this.state.count+1})
  }
  
  decrease=()=>{
    if(this.state.count>0){
    this.setState({count: this.state.count-1})
    }
  }

  reset=()=>{
    this.setState({count:0})
  }

  render(){
    return (
      <>
      <h1>Counter App</h1>
      <div className="display">
        {this.state.count}
      </div>
      <div className="buttonbox">
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
      </>
      )
    }
  }
export default App
