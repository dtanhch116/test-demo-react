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

    render() {
        const { listUsers } = this.props;

        return (
            <div className="display-info-container">
                <img src={logo} alt="logo" />
                <button onClick={() => this.handleClickButton()}>{this.state.isShowListUser ? "Hide Users" : "Show Users"}</button>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id}>
                                    <p className={user.age > 18 ? "red" : "green"}>
                                        {index + 1} - {user.name} - {user.age}
                                    </p>
                                </div>
                            )
                        })}
                    </div>}
            </div>
        );
    }
}

export default DisplayInfo;