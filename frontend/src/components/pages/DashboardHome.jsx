import React from "react";

const DashboardHome = () => (
  <>
    <div className="stats-grid">
      <div className="stat-card">
        <h4>Total Employees</h4>
        <p>120</p>
      </div>
      <div className="stat-card">
        <h4>This Month Payroll</h4>
        <p>₹ 4,50,000</p>
      </div>
      <div className="stat-card">
        <h4>Pending Tasks</h4>
        <p>5</p>
      </div>
    </div>

    <div className="table-box">
      <h4>Recent Employees</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>HR</td>
            <td>₹40,000</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>IT</td>
            <td>₹60,000</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default DashboardHome;
