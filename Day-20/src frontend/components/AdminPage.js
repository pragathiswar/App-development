import React from 'react'
import AdminHeader from '../pages/AdminHeader'
import AdminSidebar from '../pages/AdminSidebar'
import ADhome from '../pages/ADhome'

export default function AdminPage() {
    return (
        <div>
            <AdminHeader />
            <nav id='admin'>
                <AdminSidebar />
                <ADhome />
            </nav>
        </div>
    )
}
