import React from "react";

const ReportsPage = () => {

  const reports = [
    {
      title: "Employee Report",
      desc: "Complete list of employees with department and salary details.",
      type: "PDF"
    },
    {
      title: "Payroll Report",
      desc: "Monthly payroll summary including deductions and net pay.",
      type: "PDF"
    },
    {
      title: "Attendance Report",
      desc: "Daily attendance status of employees.",
      type: "Excel"
    },
    {
      title: "Analytics Summary",
      desc: "Workforce performance and payroll insights.",
      type: "PDF"
    }
  ];

  const downloadReport = (name) => {
    alert(`${name} downloaded successfully`);
  };

  return (
    <div className="page-box">
      <h2 className="page-title">Reports</h2>

      <div className="reports-grid">
        {reports.map((r, i) => (
          <div key={i} className="report-card">
            <div className="report-icon">📄</div>

            <h4>{r.title}</h4>
            <p>{r.desc}</p>

            <button
              className="btn primary"
              onClick={() => downloadReport(r.title)}
            >
              Download {r.type}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
