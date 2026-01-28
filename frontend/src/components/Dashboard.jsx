import React, { useState } from "react";
import "./Dashboard.css";
import DashboardHome from "./pages/DashboardHome";
import EmployeesPage from "./pages/EmployeesPage";
import PayrollPage from "./pages/PayrollPage";
import ReportsPage from "./pages/ReportsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AttendancePage from "./pages/AttendancePage";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch(activePage){
      case "employees": return <EmployeesPage />;
      case "payroll": return <PayrollPage />;
      case "reports": return <ReportsPage />;
      case "analytics": return <AnalyticsPage />;
      case "attendance": return <AttendancePage />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2 className="brand">MyAcc</h2>
        <nav className="side-menu">
          <button className={`menu-btn ${activePage==="dashboard"?"active":""}`} onClick={() => setActivePage("dashboard")}>Dashboard</button>
          <button className={`menu-btn ${activePage==="employees"?"active":""}`} onClick={() => setActivePage("employees")}>Employees</button>
          <button className={`menu-btn ${activePage==="payroll"?"active":""}`} onClick={() => setActivePage("payroll")}>Payroll</button>
          <button className={`menu-btn ${activePage==="reports"?"active":""}`} onClick={() => setActivePage("reports")}>Reports</button>
          <button className={`menu-btn ${activePage==="analytics"?"active":""}`} onClick={() => setActivePage("analytics")}>Analytics</button>
          <button className={`menu-btn ${activePage==="attendance"?"active":""}`} onClick={() => setActivePage("attendance")}>Attendance</button>
        </nav>
      </aside>
      <div className="main-panel">
        <header className="topbar">
          <h3>{activePage}</h3>
          <button className="logout-btn">Logout</button>
        </header>
        <section className="content">{renderContent()}</section>
      </div>
    </div>
  );
};

export default Dashboard;
