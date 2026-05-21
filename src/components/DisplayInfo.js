import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {

//     handleClickDelete = (userId) => {
//         this.props.onDeleteUser(userId);
//     }

//     render() {
//         console.log("call me render");

//         const { listUsers } = this.props;

//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id}>
//                                     <p className={user.age > 18 ? "red" : "green"}>
//                                         {user.id} - {user.name} - {user.age}
//                                     </p>
//                                     <button onClick={() => this.handleClickDelete(user.id)}>Delete</button>
//                                 </div>
//                             )
//                         })}
//                     </>}
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {

    const { listUsers } = props;

    const [showListUser, setShowListUser] = useState(true);

    const handleClickDelete = (userId) => {
        props.onDeleteUser(userId);
    }

    const handleToggleShowListUser = () => {
        setShowListUser(!showListUser);
    }

    useEffect(() => {
        console.log("call me useEffect");
    }, [listUsers);

    console.log("asfasfasf");


    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleToggleShowListUser()} style={{ cursor: "pointer" }}>
                    {showListUser ? "Hide" : "Show"} list users
                </span>
            </div>
            {showListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id}>
                                <p className={user.age > 18 ? "red" : "green"}>
                                    {user.id} - {user.name} - {user.age}
                                </p>
                                <button onClick={() => handleClickDelete(user.id)}>Delete</button>
                            </div>
                        )
                    })}
                </>}
        </div>
    );
}

export default DisplayInfo;