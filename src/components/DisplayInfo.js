import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }

    handleClickButton = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        });
    }

    handleClickDelete = (userId) => {
        this.props.onDeleteUser(userId);
    }

    render() {
        const { listUsers } = this.props;

        return (
            <div className="display-info-container">
                <img src={logo} alt="logo" />
                <button onClick={() => this.handleClickButton()}>{this.state.isShowListUser ? "Hide Users" : "Show Users"}</button>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id}>
                                    <p className={user.age > 18 ? "red" : "green"}>
                                        {user.id} - {user.name} - {user.age}
                                    </p>
                                    <button onClick={() => this.handleClickDelete(user.id)}>Delete</button>
                                </div>
                            )
                        })}
                    </>}
            </div>
        );
    }
}

export default DisplayInfo;