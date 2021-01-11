import React, { useState } from "react";

const ShipingDetails = () => {
  const [values, setValues] = useState({
    name: " ",
    address: " ",
    state: " ",
    contactNumber: "",
    district: "",
    error: false,
    success: false,
  });
  const {
    name,
    address,
    state,
    error,
    success,
    contactNumber,
    district,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  return (
    <div>
      <form>
        <div className="col-12 signup_header">
          <h4 className="pb-2">Shipping Details</h4>
        </div>
        <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={handleChange("name")}
          />
        </div>
        <div className="col-12 col-md-9 col-lg-9 col-xl-9 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            onChange={handleChange("address")}
          />
        </div>
        <div className="col-12 col-md-9 col-lg-9  col-xl-9 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="State"
            onChange={handleChange("state")}
          />
        </div>
        <div className="col-12 col-md-9 col-lg-9  col-xl-9 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="District"
            onChange={handleChange("district")}
          />
        </div>
        <div className="col-12 col-md- col-lg-9  col-xl-9 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Contact Number"
            onChange={handleChange("contactNumber")}
          />
        </div>
        <div className="col-12 col-md-9 col-lg-9 ">
          <button type="submit" className="btn btn-warning btn-block ml-1">
            Proceed To Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipingDetails;
