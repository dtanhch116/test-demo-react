import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {

    render() {

        const myInfo = [1, 3, 4]
        return (
            <div>
                <UserInfo />
                <br />
                <DisplayInfo listUsers={[{ id: 1, name: "anT", age: 27 }]} myInfo={myInfo} />
            </div>
        );
    }
}

export default MyComponent;