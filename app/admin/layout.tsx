import React from 'react'

interface AdminLayoutProps {
    children: React.ReactNode

}

const AdminLayout = ({
    children 
} : AdminLayoutProps) => {
    return ( <div style={{ backgroundColor : "red"}}>
        {children}
    </div>);
}
 
export default AdminLayout;