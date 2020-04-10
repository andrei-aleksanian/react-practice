import React, { Component } from 'react';
import './App.css';
import InputValidation from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
    state ={
        stringInput: [
        ],
        pValue: "",
        inputValue: ""
    };

    inputChangeHandler = (e) => {
        const value = e.target.value;
        const charArray = value.split("").map( (char) => {
            return {char: char, id: Math.random()};
        });

        this.setState({
            stringInput: charArray,
            pValue: value.length >= 5 ?
                "perfect length" : "Too short!",
            inputValue: value
        })
    };

    deleteHandler = (id) => {
        let value = "";

        const charArray = this.state.stringInput.filter((char) => {
            if (char.id !== id) {
                value += char.char;
                return true;
            }else{
                return false;
            }
        });

        this.setState({
            stringInput: charArray,
            inputValue: value,
            pValue: value.length >= 5 ?
                "perfect length" : "Too short!",
        });
    };

  render() {
      const charArray = this.state.stringInput.map( char => {
         return (
             <CharComponent letter={char.char}
                            key={char.id}
                            onClick={this.deleteHandler.bind(this, char.id)}
             />
         );
      });

    return (
      <div className="App">
        <h2>Enter your username:</h2>
          <InputValidation onChange={this.inputChangeHandler}
                           value={this.state.inputValue}
                           message={this.state.pValue}
          />
          <div>{charArray}</div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
