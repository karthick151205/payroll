import React from "react";

const AnalyticsPage = () => {
  const stats = [
    { title: "Total Employees", value: 120 },
    { title: "Monthly Payroll", value: "₹4.5L" },
    { title: "Attendance Rate", value: "96%" },
    { title: "Attrition Rate", value: "3.2%" }
  ];

  const chartData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 80 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 90 },
    { month: "May", value: 70 }
  ];

  return (
    <div className="page-box">
      <h2 className="page-title">Analytics Overview</h2>

      {/* KPI Cards */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <h4>{s.title}</h4>
            <p>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="chart-box">
        <h4>Payroll Trend</h4>
        <div className="bar-chart">
          {chartData.map((d, i) => (
            <div key={i} className="bar-item">
              <div
                className="bar"
                style={{ height: `${d.value}%` }}
              ></div>
              <span>{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
