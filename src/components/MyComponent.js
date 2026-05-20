import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "anT",
        address: "HN",
        age: 27
    }

    render() {
        return (
            <div>
                <h1>My Component</h1>
                My name is {this.state.name}, I am {this.state.age} years old and I live in {this.state.address}.
            </div>
        );
    }
}

export default MyComponent;