import React from 'react'
import AdminNavbar from '../components/header/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../components/footer/AdminFooter'

const AdminLayout = () => {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <Outlet></Outlet>
            <AdminFooter></AdminFooter>
        </div>
    )
}

export default AdminLayout
