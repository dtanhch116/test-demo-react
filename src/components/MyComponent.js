import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "anT",
        address: "HN",
        age: 27
    }

    handleClick(event) {
        console.log(this.state.name);
        this.setState({
            name: "anT2",
            address: "HCM",
            age: Math.floor(Math.random() * 100) + 1
        });
    }

    handleOnMouseOver(event) {
        console.log(event.pageX, event.pageY);
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log(event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }   

    render() {
        return (
            <div>
                <h1>My Component</h1>
                My name is <strong>{this.state.name}</strong>, I am {this.state.age} years old and I live in {this.state.address}.
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChange(event)}/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

export default MyComponent;