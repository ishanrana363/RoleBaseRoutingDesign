import { Outlet } from "react-router-dom"
import UserFooter from "../components/footer/UserFooter"
import UserNavbar from "../components/header/UserNavbar"

const UserLayout = () => {
    return (
        <div>
            <UserNavbar></UserNavbar>
            <Outlet></Outlet>
            <UserFooter></UserFooter>
        </div>
    )
}

export default UserLayout
