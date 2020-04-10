import React, { Component } from 'react';
import './App.css';
import Person from "../Components/Person/Person";

class App extends Component{
    state = {
        persons: [
            {name: "Andrei", age: 29, id: 0},
            {name: "Max", age: 92, id: 1}
        ],
        hiddenPeople: true
    };

    switchNameHandler = newName => {
        this.setState({
            persons: this.state.persons.reverse(),
            hiddenPeople: false
        });
    };

    onDeleteHandler = (id) => {
        let persons = [...this.state.persons];
        persons = persons.filter(person => person.id !== id);
        console.log(persons);
        this.setState({persons: persons});
    };

    onChangeHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });

        const personToUpdate = {
          ...this.state.persons[personIndex]
        };

        personToUpdate.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = personToUpdate;

        this.setState({
            persons
        });
    };

    render(){
        let personsJsx = null;

        if (!this.state.hiddenPeople) {
            personsJsx = this.state.persons.map((person) => {
                return (
                    < Person
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        onChange={(e) => this.onChangeHandler(e, person.id)}
                        onClick={(e) => this.onDeleteHandler(person.id)}
                    />
                );
            });
        } else {
            personsJsx = null;
        }
        return (
            <div className="App">
                <h1>Hi I'm a react developer freelancer!</h1>
                <button onClick={this.switchNameHandler.bind(this, "Maxiiiim")}>Click me</button>

                <div>
                    {personsJsx}
                </div>

            </div>
        );
    }
}

export default App;
