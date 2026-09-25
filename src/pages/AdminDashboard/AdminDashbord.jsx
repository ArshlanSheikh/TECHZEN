import { useState } from "react";
import styles from "./AdminDashbord.module.css";

import AdminHeader from "./AdminHeader/AdminHeader";
import AdminSidebar from "./AdminSideBar/AdminSidebar";





function AdminDashbord() {
    
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("orders");

  const renderPage = () => {
    switch (activePage) {
      case "sales":
        return <>salse1</>;

      case "orders":
        return <>salse2</>;
      
      case "payments":
        return <>salse3</>;


      case "users":
        return <>salse4</>;

      case "products":
        return <>salse5</>;

      default:
        return <>salse7</>;
    }
  };

  return (
    <div className={styles.dashboard}>
      <AdminHeader
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className={styles.mainContainer}>
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setActivePage={setActivePage}
        />

        <main className={styles.content}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default AdminDashbord;

