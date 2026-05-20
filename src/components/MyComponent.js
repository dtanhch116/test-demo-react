import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "anT", age: 27 },
            { id: 2, name: "anT2", age: 28 },
            { id: 3, name: "anT3", age: 29 }
        ],
    }

    render() {

        const myInfo = [1, 3, 4]
        return (
            <div>
                <UserInfo />
                <br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;