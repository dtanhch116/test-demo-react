import React from 'react';
import { useState } from 'react';

// class AddUserInfo extends React.Component {

//     state = {
//         name: "",
//         address: "HN",
//         age: ''
//     }

//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         });
//         // console.log(event.target.value);
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         });
//         // console.log(event.target.value);
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.onAddUser({
//             id: Math.floor(Math.random() * 10000),
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is <strong>{this.state.name}</strong>, I am {this.state.age} years old and I live in {this.state.address}.
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label htmlFor="name">Your Name: </label>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangeName(event)} />

//                     <label htmlFor="age">Your Age: </label>
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangeAge(event)} />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }

// }

const AddUserInfo = (props) => {

    const [user, setUser] = useState({
        name: "",
        age: ''
    });
    // const [age, setAge] = useState("");


    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.onAddUser({
            id: Math.floor(Math.random() * 10000),
            name: user.name,
            age: user.age
        });
    }

    return (
        <div>
            My name is <strong>{user.name}</strong>, I am {user.age} years old.
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label htmlFor="name">Your Name: </label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(event) => setUser({ ...user, name: event.target.value })} />

                <label htmlFor="age">Your Age: </label>
                <input
                    type="text"
                    value={user.age}
                    onChange={(event) => setUser({ ...user, age: event.target.value })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddUserInfo;