import AdminNavbar from './AdminNavbar';
import AdminMain from './AdminMain';
import AdminFooter from './AdminFooter';




const AdminLayout = () => {

    return (

        <div className='RootLayout'>

            <AdminNavbar></AdminNavbar>
            <AdminMain></AdminMain>
            <AdminFooter></AdminFooter>   

        </div>


    )

    
}

export default AdminLayout