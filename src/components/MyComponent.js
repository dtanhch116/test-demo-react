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

    render() {
        return (
            <div>
                <h1>My Component</h1>
                My name is {this.state.name}, I am {this.state.age} years old and I live in {this.state.address}.
                <button onMouseOver={this.handleOnMouseOver}>hover Me!</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click Me!</button>

            </div>
        );
    }
}

export default MyComponent;