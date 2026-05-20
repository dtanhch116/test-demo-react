import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "anT", age: 27 },
            { id: 2, name: "anT2", age: 16 },
            { id: 3, name: "anT3", age: 29 }
        ],
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj);

        this.setState({
            listUsers: [...this.state.listUsers, userObj]
        })
    }

    render() {

        const myInfo = [1, 3, 4]
        return (
            <div>
                <AddUserInfo onAddUser={this.handleAddNewUser} />
                <br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;