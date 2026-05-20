import React from "react";

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
            <div>
                <button onClick={() => this.handleClickButton()}>{this.state.isShowListUser ? "Hide Users" : "Show Users"}</button>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id}>
                                    <p style={user.age > 18 ? { color: "red" } : { color: "green" }}>
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