import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { result: 0, num1: "", num2: "" };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.sumNums = this.sumNums.bind(this);
    this.subtractNums = this.subtractNums.bind(this);
    this.mulitplyNums = this.mulitplyNums.bind(this);
    this.divideNums = this.divideNums.bind(this);
    this.reset = this.reset.bind(this);
  }

  setNum1(e){
    const num1 = e.currentTarget.value ? parseInt(e.currentTarget.value) : "";
    this.setState({ num1 });
  }

  setNum2(e){
    const num2 = e.currentTarget.value ? parseInt(e.currentTarget.value) : "";
    this.setState({ num2 });
  }

  reset(e) {
    e.preventDefault();
    this.setState({ result: 0, num1: "", num2: "" } );
  }

  sumNums(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtractNums(e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState( { result } )
  }

  divideNums(e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState( { result } )
  }

  mulitplyNums(e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState( { result } )
  }

  render() {
    const {num1, num2, result} = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} type="text" value={num1}/>
        <input onChange={this.setNum2} type="text" value={num2}/>
        <button onClick={this.reset}>Clear</button>
        <br/>
        <button onClick={this.sumNums}>+</button>
        <button onClick={this.subtractNums}>-</button>
        <button onClick={this.mulitplyNums}>*</button>
        <button onClick={this.divideNums}>/</button>
      </div>
    );
  }
}

export default Calculator;