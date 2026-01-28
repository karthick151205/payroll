import React, { useState } from "react";
import jsPDF from "jspdf";

const PayrollPage = () => {
  const [salary, setSalary] = useState({ basic: "", allowance: "", deduction: "" });

  const handleChange = (e) => setSalary({ ...salary, [e.target.name]: e.target.value });
  const basic = Number(salary.basic) || 0;
  const allowance = Number(salary.allowance) || 0;
  const deduction = Number(salary.deduction) || 0;
  const gross = basic + allowance;
  const net = gross - deduction;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18); doc.text("Employee Payslip", 20, 20);
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
        <div className="payroll-form">
          <label>Basic Salary</label>
          <input name="basic" value={salary.basic} onChange={handleChange} placeholder="Enter basic salary" />
          <label>Allowance</label>
          <input name="allowance" value={salary.allowance} onChange={handleChange} placeholder="Enter allowances" />
          <label>Deductions</label>
          <input name="deduction" value={salary.deduction} onChange={handleChange} placeholder="Enter deductions" />
          <button className="btn primary" style={{ marginTop: "20px" }} onClick={downloadPDF}>Download Payslip PDF</button>
        </div>
        <div className="payslip">
          <h4>Payslip Preview</h4>
          <div className="slip-row"><span>Basic</span><span>₹ {basic}</span></div>
          <div className="slip-row"><span>Allowance</span><span>₹ {allowance}</span></div>
          <div className="slip-row"><span>Gross Pay</span><span>₹ {gross}</span></div>
          <div className="slip-row"><span>Deductions</span><span>₹ {deduction}</span></div>
          <hr />
          <div className="slip-row total"><span>Net Salary</span><span>₹ {net}</span></div>
        </div>
      </div>
    </div>
  );
};

export default PayrollPage;
