import React, { useState } from "react";
import "./Dashboard.css";
import jsPDF from "jspdf";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, BarChart, Bar
} from "recharts";



/* ---------------- DASHBOARD HOME ---------------- */

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

/* ---------------- EMPLOYEE FORM MODAL ---------------- */

const EmployeeModal = ({ open, onClose, onSave, editData }) => {

  const [form, setForm] = useState({
    name: "",
    department: "",
    salary: ""
  });

  React.useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.department || !form.salary) return;

    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        <h3>{editData ? "Edit Employee" : "Add Employee"}</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Employee Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
          />

          <input
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
          />

          <button className="btn primary full">
            {editData ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};


/* ---------------- EMPLOYEES PAGE ---------------- */

const EmployeesPage = () => {

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", department: "HR", salary: "40000" },
    { id: 2, name: "Jane Smith", department: "IT", salary: "60000" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const openAdd = () => {
    setEditEmployee(null);
    setModalOpen(true);
  };

  const openEdit = (emp) => {
    setEditEmployee(emp);
    setModalOpen(true);
  };

  const saveEmployee = (emp) => {

    if (editEmployee) {
      // update
      setEmployees(
        employees.map(e =>
          e.id === editEmployee.id
            ? { ...emp, id: editEmployee.id }
            : e
        )
      );
    } else {
      // add new
      setEmployees([
        ...employees,
        { ...emp, id: Date.now() }
      ]);
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  return (
    <div className="page-box">

      <div className="page-header">
        <h3>Employees</h3>
        <button className="btn primary" onClick={openAdd}>
          Add Employee
        </button>
      </div>

      <table className="emp-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>₹ {emp.salary}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => openEdit(emp)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EmployeeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={saveEmployee}
        editData={editEmployee}
      />
    </div>
  );
};


/* ---------------- PAYROLL PAGE ---------------- */

const PayrollPage = () => {

  const [salary, setSalary] = useState({
    basic: "",
    allowance: "",
    deduction: ""
  });

  const handleChange = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  const basic = Number(salary.basic) || 0;
  const allowance = Number(salary.allowance) || 0;
  const deduction = Number(salary.deduction) || 0;

  const gross = basic + allowance;
  const net = gross - deduction;

  /* -------- PDF GENERATION -------- */
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Employee Payslip", 20, 20);

    doc.setFontSize(12);
    doc.text(`Basic Salary: ₹ ${basic}`, 20, 40);
    doc.text(`Allowance: ₹ ${allowance}`, 20, 50);
    doc.text(`Gross Pay: ₹ ${gross}`, 20, 60);
    doc.text(`Deductions: ₹ ${deduction}`, 20, 70);
    doc.text(`Net Salary: ₹ ${net}`, 20, 90);

    doc.save("payslip.pdf");
  };

  return (
    <div className="page-box">

      <h3>Payroll Calculator</h3>

      <div className="payroll-grid">

        {/* INPUT FORM */}
        <div className="payroll-form">

          <label>Basic Salary</label>
          <input
            name="basic"
            placeholder="Enter basic salary"
            value={salary.basic}
            onChange={handleChange}
          />

          <label>Allowance</label>
          <input
            name="allowance"
            placeholder="Enter allowances"
            value={salary.allowance}
            onChange={handleChange}
          />

          <label>Deductions</label>
          <input
            name="deduction"
            placeholder="Enter deductions"
            value={salary.deduction}
            onChange={handleChange}
          />

          <button
            className="btn primary"
            style={{ marginTop: "20px" }}
            onClick={downloadPDF}
          >
            Download Payslip PDF
          </button>

        </div>

        {/* PAYSLIP PREVIEW */}
        <div className="payslip">

          <h4>Payslip Preview</h4>

          <div className="slip-row">
            <span>Basic</span>
            <span>₹ {basic}</span>
          </div>

          <div className="slip-row">
            <span>Allowance</span>
            <span>₹ {allowance}</span>
          </div>

          <div className="slip-row">
            <span>Gross Pay</span>
            <span>₹ {gross}</span>
          </div>

          <div className="slip-row">
            <span>Deductions</span>
            <span>₹ {deduction}</span>
          </div>

          <hr />

          <div className="slip-row total">
            <span>Net Salary</span>
            <span>₹ {net}</span>
          </div>

        </div>
      </div>

    </div>
  );
};



/* ---------------- REPORTS PAGE ---------------- */

const ReportsPage = () => (
  <div className="page-box">
    <h3>Reports</h3>
    <p>Reports UI coming soon.</p>
  </div>
);

/* ---------------- MAIN DASHBOARD ---------------- */

const Dashboard = () => {

  const [activePage, setActivePage] = useState("dashboard");

    const renderContent = () => {
    switch (activePage) {
        case "employees":
        return <EmployeesPage />;
        case "payroll":
        return <PayrollPage />;
        case "reports":
        return <ReportsPage />;
        case "analytics":
        return <AnalyticsPage />;
        case "attendance":
        return <AttendancePage />;
        default:
        return <DashboardHome />;
    }
    };


  return (
    <div className="dashboard-layout">

      <aside className="sidebar">
        <h2 className="brand">MyAcc</h2>

        <nav className="side-menu">
          <a
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </a>

          <a
            className={activePage === "employees" ? "active" : ""}
            onClick={() => setActivePage("employees")}
          >
            Employees
          </a>

          <a
            className={activePage === "payroll" ? "active" : ""}
            onClick={() => setActivePage("payroll")}
          >
            Payroll
          </a>

          <a
            className={activePage === "reports" ? "active" : ""}
            onClick={() => setActivePage("reports")}
          >
            Reports
          </a>
          <a
            className={activePage === "analytics" ? "active" : ""}
            onClick={() => setActivePage("analytics")}
          >
            Analytics
          </a>
          <a
            className={activePage === "attendance" ? "active" : ""}
            onClick={() => setActivePage("attendance")}
            >
            Attendance
        </a>

        </nav>
      </aside>

      <div className="main-panel">

        <header className="topbar">
          <h3>{activePage}</h3>
          <button className="logout-btn">Logout</button>
        </header>

        <section className="content">
          {renderContent()}
        </section>

      </div>
    </div>
  );
};

/* ---------------- Analytics Page ---------------- */
const AnalyticsPage = () => {

  const payrollData = [
    { month: "Jan", amount: 300000 },
    { month: "Feb", amount: 350000 },
    { month: "Mar", amount: 400000 },
    { month: "Apr", amount: 450000 },
    { month: "May", amount: 500000 },
  ];

  const employeeData = [
    { dept: "HR", count: 10 },
    { dept: "IT", count: 40 },
    { dept: "Finance", count: 20 },
    { dept: "Sales", count: 30 },
  ];

  return (
    <div className="page-box">

      <h3>Analytics</h3>

      <div className="charts-grid">

        {/* PAYROLL TREND */}
        <div className="chart-card">
          <h4>Monthly Payroll</h4>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={payrollData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* EMPLOYEE DISTRIBUTION */}
        <div className="chart-card">
          <h4>Employees by Department</h4>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={employeeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dept" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#22c55e"
                radius={[6,6,0,0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};
/* ---------------- Attendence Page ---------------- */

const AttendancePage = () => {

  const [records, setRecords] = useState([
    { id: 1, name: "John Doe", date: "2026-01-10", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2026-01-10", status: "Absent" },
  ]);

  const [form, setForm] = useState({
    name: "",
    date: "",
    status: "Present"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addRecord = (e) => {
    e.preventDefault();

    if (!form.name || !form.date) return;

    setRecords([
      ...records,
      { ...form, id: Date.now() }
    ]);

    setForm({ name: "", date: "", status: "Present" });
  };

  const presentCount = records.filter(r => r.status === "Present").length;
  const absentCount = records.filter(r => r.status === "Absent").length;

  return (
    <div className="page-box">

      <h3>Attendance</h3>

      {/* ADD FORM */}
      <form className="attendance-form" onSubmit={addRecord}>

        <input
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button className="btn primary">Add</button>
      </form>

      {/* SUMMARY */}
      <div className="attendance-summary">
        <div>Present: {presentCount}</div>
        <div>Absent: {absentCount}</div>
      </div>

      {/* TABLE */}
      <table className="emp-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.date}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Dashboard;
