import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {

    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage Users
            </div>
            <div classNameName="user-content">
                <button classNameName="add-user-btn">
                    Add User
                </button>
                <div classNameName="user-table">
                    table user
                </div>
            </div>
            <ModalCreateUser />
        </div>
    );
}

export default ManageUser;