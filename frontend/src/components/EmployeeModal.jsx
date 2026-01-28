import React, { useState, useEffect } from "react";

const EmployeeModal = ({ open, onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    staffName: "",
    doj: "",
    lwd: "",
    active: "Yes",
    region: "",
    contractCompany: "",
    siPartner: "",
    routingCompany: "",
    payrollCompany: "",
    contractType: "",
    payrollProvider: "",
    billingCurrency: "",
    baseRate: "",
    billingRate: "",
    candidateRate: "",
    margin: "",
    portfolio: ""
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here if needed
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{editData ? "Edit Employee" : "Add Employee"}</h3>
        <form onSubmit={handleSubmit}>
          {/* Staff Basic Info */}
          <input name="staffName" placeholder="Staff Name" value={form.staffName} onChange={handleChange} />
          <input type="date" name="doj" placeholder="Date of Joining" value={form.doj} onChange={handleChange} />
          <input type="date" name="lwd" placeholder="Last Working Day" value={form.lwd} onChange={handleChange} />
          <select name="active" value={form.active} onChange={handleChange}>
            <option value="Yes">Active</option>
            <option value="No">Inactive</option>
          </select>
          <input name="region" placeholder="Region" value={form.region} onChange={handleChange} />

          {/* Company & Contract Info */}
          <input name="contractCompany" placeholder="Contract Company" value={form.contractCompany} onChange={handleChange} />
          <input name="siPartner" placeholder="SI Partner" value={form.siPartner} onChange={handleChange} />
          <input name="routingCompany" placeholder="Routing Company" value={form.routingCompany} onChange={handleChange} />
          <input name="payrollCompany" placeholder="Payroll Company" value={form.payrollCompany} onChange={handleChange} />
          <input name="contractType" placeholder="Contract Type" value={form.contractType} onChange={handleChange} />
          <input name="payrollProvider" placeholder="Payroll Provider" value={form.payrollProvider} onChange={handleChange} />

          {/* Rates & Portfolio */}
          <input name="billingCurrency" placeholder="Billing Currency" value={form.billingCurrency} onChange={handleChange} />
          <input name="baseRate" placeholder="Base Rate" value={form.baseRate} onChange={handleChange} />
          <input name="billingRate" placeholder="Billing Rate" value={form.billingRate} onChange={handleChange} />
          <input name="candidateRate" placeholder="Candidate Rate" value={form.candidateRate} onChange={handleChange} />
          <input name="margin" placeholder="Margin" value={form.margin} onChange={handleChange} />
          <input name="portfolio" placeholder="Portfolio" value={form.portfolio} onChange={handleChange} />

          <button className="btn primary full">{editData ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
