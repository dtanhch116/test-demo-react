import React from "react";

class DisplayInfo extends React.Component {

    render() {
        const { listUsers, myInfo } = this.props;
        console.log(myInfo);

        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <p>{index + 1} - {user.name} - {user.age}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default DisplayInfo;