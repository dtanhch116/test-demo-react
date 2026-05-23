import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaRegLaughWink,
    FaHeart
} from "react-icons/fa";

const SideBar = (props) => {
    let collapsed = props.collapsed;
    return (
        <Sidebar
            style={{ height: "100vh" }}
            backgroundColor="#1f2937"
            collapsed={collapsed}
        >
            <Menu
                menuItemStyles={{
                    button: {
                        color: "#ffffff",
                        "&:hover": {
                            backgroundColor: "#606060",
                            color: "#ffffff",
                        },
                    },
                    subMenuContent: {
                        backgroundColor: "#1f2937",
                    },
                }}
            >
                <MenuItem
                    icon={<FaTachometerAlt />}
                    component={<Link to="/" />}
                    menuItemStyles={{
                        "&:hover": {
                            backgroundColor: "#4b5563",
                        },
                    }}
                >
                    Dashboard
                </MenuItem>

                <MenuItem
                    icon={<FaGem />}
                    component={<Link to="/components" />}
                >
                    Components
                </MenuItem>

                <SubMenu
                    label="Charts"
                    icon={<FaRegLaughWink />}
                >
                    <MenuItem>Pie charts</MenuItem>
                    <MenuItem>Line charts</MenuItem>
                    <MenuItem>Bar charts</MenuItem>
                </SubMenu>

                <SubMenu
                    label="Favorites"
                    icon={<FaHeart />}
                >
                    <MenuItem>React</MenuItem>
                    <MenuItem>NodeJS</MenuItem>
                    <MenuItem>MongoDB</MenuItem>
                </SubMenu>

                <SubMenu
                    label="Multi Level"
                    icon={<FaList />}
                >
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem>Item 2</MenuItem>

                    <SubMenu label="Level 2">
                        <MenuItem>Level 2 Item 1</MenuItem>
                        <MenuItem>Level 2 Item 2</MenuItem>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Sidebar >
    );
};

export default SideBar;