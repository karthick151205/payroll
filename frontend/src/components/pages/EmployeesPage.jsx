import React, { useState } from "react";
import EmployeeModal from "../EmployeeModal";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      staffName: "John Doe",
      doj: "2024-01-10",
      lwd: "-",
      active: "Yes",
      region: "India",
      contractCompany: "ABC Corp",
      siPartner: "TCS",
      routingCompany: "XYZ Routing",
      payrollCompany: "PayTech",
      contractType: "Full Time",
      payrollProvider: "ADP",
      billingCurrency: "INR",
      baseRate: "40000",
      billingRate: "60000",
      candidateRate: "50000",
      margin: "10000",
      portfolio: "Banking",
      department: "IT"
    },
    {
      id: 2,
      staffName: "Priya Sharma",
      doj: "2023-08-15",
      lwd: "-",
      active: "Yes",
      region: "India",
      contractCompany: "Infosys",
      siPartner: "Wipro",
      routingCompany: "RoutePro",
      payrollCompany: "Keka",
      contractType: "Contract",
      payrollProvider: "Zoho",
      billingCurrency: "INR",
      baseRate: "35000",
      billingRate: "52000",
      candidateRate: "45000",
      margin: "7000",
      portfolio: "Healthcare",
      department: "HR"
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  // 🔍 Search & Filter States
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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
      setEmployees(
        employees.map(e =>
          e.id === editEmployee.id ? { ...emp, id: editEmployee.id } : e
        )
      );
    } else {
      setEmployees([...employees, { ...emp, id: Date.now() }]);
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  // ================= FILTER LOGIC =================
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch =
      emp.staffName.toLowerCase().includes(search.toLowerCase()) ||
      emp.department?.toLowerCase().includes(search.toLowerCase());

    const matchesDept =
      deptFilter === "" || emp.department === deptFilter;

    const matchesStatus =
      statusFilter === "" ||
      (statusFilter === "Active" && emp.active === "Yes") ||
      (statusFilter === "Inactive" && emp.active === "No");

    return matchesSearch && matchesDept && matchesStatus;
  });

  // ================= EXCEL EXPORT =================
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredEmployees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "Filtered_Employees.xlsx");
  };

  // ================= PDF EXPORT =================
  const exportToPDF = () => {
    const doc = new jsPDF("l", "pt", "a4");

    doc.text("Employee Details Report", 40, 40);

    const columns = [
      "Staff Name", "DOJ", "LWD", "Active", "Region",
      "Department", "Contract Company", "SI Partner",
      "Payroll Company", "Contract Type", "Currency",
      "Base Rate", "Billing Rate", "Margin", "Portfolio"
    ];

    const rows = filteredEmployees.map(emp => ([
      emp.staffName,
      emp.doj,
      emp.lwd,
      emp.active,
      emp.region,
      emp.department,
      emp.contractCompany,
      emp.siPartner,
      emp.payrollCompany,
      emp.contractType,
      emp.billingCurrency,
      emp.baseRate,
      emp.billingRate,
      emp.margin,
      emp.portfolio
    ]));

    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 60,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [109, 40, 217] }
    });

    doc.save("Filtered_Employees.pdf");
  };

  return (
    <div className="page-box">
      {/* HEADER */}
      <div className="page-header">
        <h3>Employee Details</h3>
        <button className="btn primary" onClick={openAdd}>
          Add Employee
        </button>
      </div>

      {/* TOOLBAR */}
      <div className="toolbar">
        <input
          className="search-input"
          placeholder="Search staff name / department"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
        >
          <option value="">All Departments</option>
          <option>IT</option>
          <option>HR</option>
          <option>Finance</option>
        </select>

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div className="export-group">
          <button className="export-btn excel" onClick={exportToExcel}>
            Export Excel
          </button>
          <button className="export-btn pdf" onClick={exportToPDF}>
            Export PDF
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="emp-table">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Department</th>
              <th>DOJ</th>
              <th>Status</th>
              <th>Region</th>
              <th>Company</th>
              <th>Billing Rate</th>
              <th>Margin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.staffName}</td>
                <td>{emp.department}</td>
                <td>{emp.doj}</td>
                <td>
                  <span className={`status ${emp.active === "Yes" ? "active" : "inactive"}`}>
                    {emp.active}
                  </span>
                </td>
                <td>{emp.region}</td>
                <td>{emp.contractCompany}</td>
                <td>{emp.billingRate}</td>
                <td>{emp.margin}</td>
                <td>
                  <button className="edit-btn" onClick={() => openEdit(emp)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <EmployeeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={saveEmployee}
        editData={editEmployee}
      />
    </div>
  );
};

export default EmployeesPage;
