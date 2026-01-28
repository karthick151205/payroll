import React from "react";

const AttendancePage = () => {
  const attendance = [
    { id: 1, name: "John Doe", department: "HR", status: "Present" },
    { id: 2, name: "Jane Smith", department: "IT", status: "Present" },
    { id: 3, name: "Rahul Kumar", department: "Finance", status: "Absent" },
    { id: 4, name: "Anitha R", department: "Operations", status: "Present" }
  ];

  return (
    <div className="page-box">
      <h2 className="page-title">Attendance</h2>

      <div className="table-box">
        <table className="emp-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>
                  <span
                    className={`status ${
                      emp.status === "Present" ? "present" : "absent"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
