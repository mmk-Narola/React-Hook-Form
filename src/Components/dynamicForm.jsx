import React, { useState } from "react";
let renderCount = 0;

const DynamicForm = () => {
  const [inputField, setInputField] = useState([
    {
      firstName: "",
      lasrName: "",
      age: "",
    },
  ]);

  const handleFormChange = (index, e) => {
    let data = [...inputField];
    data[index][e.target.name] = e.target.value;
    setInputField(data);
  };

  const addFields = () => {
    let newField = {
      firstName: "",
      lasrName: "",
      age: "",
    };
    // setInputField((prev) => [...prev, newField]);
    setInputField([...inputField, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputField];
    data.splice(index, 1);
    setInputField(data);
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(inputField);
    // setInputField(newField);
    let newField = {
      firstName: "",
      lasrName: "",
      age: "",
    };
    setInputField([newField]);
  };

  renderCount += 1;

  return (
    <div className="content">
      <h3 className="text-center">Dynamic Form</h3>
      <div className="row">
        <form>
          {inputField.map((input, index) => {
            return (
              <div className="d-flex" key={index}>
                <div className="col-md-3 mb-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    value={input.firstName}
                    onChange={(e) => handleFormChange(index, e)}
                  />
                </div>
                <div className="col-md-3 ms-2">
                  <input
                    type="text"
                    name="lasrName"
                    placeholder="Last Name"
                    className="form-control"
                    value={input.lasrName}
                    onChange={(e) => handleFormChange(index, e)}
                  />
                </div>

                <div className="col-md-3  ms-2">
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    className="form-control"
                    value={input.age}
                    onChange={(e) => handleFormChange(index, e)}
                  />
                </div>
                <div className="col-md-3 ms-2 ">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={removeFields}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </div>
            );
          })}

          <button
            className="btn btn-primary m-2"
            type="submit"
            onClick={Submit}
          >
            Submit
          </button>
          <button
            className="btn btn-warning m-2"
            type="button"
            onClick={addFields}
          >
            <i className="bi bi-person-add"></i> Add More..
          </button>
          {renderCount}
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
{
  /*<div className="d-flex">
            <div className="col-md-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-warning">
                <i className="bi bi-person-add"></i>
              </button>
            </div>

            <div className="col-md-4 mb-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-2">
            <input
              type="number"
              name=""
              id=""
              placeholder="Age"
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-2">
            <input
              type="number"
              name=""
              id=""
              placeholder="Mobile No"
              className="form-control"
            />
          </div>
          <div className="col-md-4 mb-2">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Address"
            ></textarea>
          </div> 
        </div>*/
}
