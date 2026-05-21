import React from 'react';
import { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "anT", age: 27 },
//             { id: 2, name: "anT2", age: 16 },
//             { id: 3, name: "anT3", age: 29 }
//         ],
//     }

//     handleAddNewUser = (userObj) => {
//         console.log(userObj);

//         this.setState({
//             listUsers: [...this.state.listUsers, userObj]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let currentListUsers = [...this.state.listUsers];
//         currentListUsers = currentListUsers.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: currentListUsers
//         })
//     }

//     render() {

//         const myInfo = [1, 3, 4]
//         return (
//             <>
//                 <AddUserInfo onAddUser={this.handleAddNewUser} />
//                 <br />
//                 <DisplayInfo
//                     listUsers={this.state.listUsers}
//                     onDeleteUser={this.handleDeleteUser} />
//             </>
//         );
//     }
// }

const MyComponent = () => {

    const [listUsers, setListUsers] = useState([
        { id: 1, name: "anT", age: 27 },
        { id: 2, name: "anT2", age: 16 },
        { id: 3, name: "anT3", age: 29 }
    ]);

    const handleAddNewUser = (userObj) => {
        console.log(userObj);

        setListUsers([userObj, ...listUsers]);
    }

    const handleDeleteUser = (userId) => {
        let currentListUsers = [...listUsers];
        currentListUsers = currentListUsers.filter(item => item.id !== userId);
        setListUsers(currentListUsers);
    }

    return (
        <>
            <AddUserInfo onAddUser={handleAddNewUser} />
            <br />
            <DisplayInfo
                listUsers={listUsers}
                onDeleteUser={handleDeleteUser} />
        </>
    );
}

export default MyComponent;