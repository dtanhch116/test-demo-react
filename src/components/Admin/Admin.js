import "./Admin.scss";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars className="admin-toggle"
                    onClick={() => setCollapsed(!collapsed)}
                />
                admin page
            </div>
        </div>
    );
}

export default Admin;