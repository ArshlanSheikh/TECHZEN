import { Outlet } from "react-router-dom"
import styles from './Layout.module.css'

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

const Layout = ()=>{
    return(
        <div  className={styles.layout}>
            <Navbar></Navbar>
            <main  className={styles.main}>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}


export default Layout;