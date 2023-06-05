import React, { useEffect, useState } from "react";
import DemoForm from "./demoForm";

const initialState = {
  name: "",
  email: "",
  password: "",
  comfirmPass: "",
  mobileNumber: "",
  joinDate: "",
  occupation: "",
  gender: "",
  languageTool: [],
};

const FormValidation = () => {
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const formValidation = (values) => {
    const validationErrors = {};

    // convert object in array and use forEach for error
    const objArray = Object.keys(values);
    objArray.forEach((iterator) => {
      if (!values[iterator] || values[iterator].length < 1) {
        validationErrors[iterator] = `${iterator} is required.....`;
      }
    });

    //using for in loop
    // for (const iterator in values) {
    //   if (!values[iterator]) {
    //     validationErrors[iterator] = `${iterator} is required.....`;
    //   }
    // }
    return validationErrors;
  };

  const validaInputField = (name, value) => {
    switch (name) {
      case "name":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "Name is required" };
          });
        } else if (value.length < 3) {
          setFormError((prev) => {
            return {
              ...prev,
              [name]: "name should be at least 3 characters.",
            };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;
      case "email":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "Email is required" };
          });
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setFormError((prev) => {
            return {
              ...prev,
              [name]: "Please Enter Valid Email Formate ex abc@gmail.com!",
            };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;
      case "password":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "Password is required" };
          });
        } else if (value.length < 3) {
          setFormError((prev) => {
            return {
              ...prev,
              [name]: "Password least 3 characters.",
            };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;
      case "comfirmPass":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "comfirmPass is required" };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      case "mobileNumber":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "mobileNumber is required" };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      case "joinDate":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "joinDate is required" };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      case "occupation":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "occupation is required" };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      case "gender":
        if (value === "" || !value) {
          setFormError((prev) => {
            return { ...prev, [name]: "gender is required" };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      case "languageTool":
        if (value.length === 0) {
          setFormError((prev) => {
            return { ...prev, [name]: "languageTool is required" };
          });
        } else {
          setFormError((prev) => {
            return { ...prev, [name]: "" };
          });
        }
        break;

      default:
        break;
    }
  };

  const formFieldValidation = ({ type, name = "", value }) => {
    if (type === "onSubmit") {
      return formValidation(value);
    } else {
      return validaInputField(name, value);
    }
  };

  const onChangeField = (e) => {
    let checkBoxValue = { ...formData };
    let fieldValue = e.target.value;
    if (e.target.name === "languageTool") {
      if (e.target.checked) {
        checkBoxValue.languageTool.push(fieldValue);
      } else {
        checkBoxValue.languageTool = checkBoxValue.languageTool.filter(
          (ele) => ele !== fieldValue
        );
      }
      setFormData(checkBoxValue);
    } else {
      formFieldValidation({
        type: "",
        name: e.target.name,
        value: e.target.value,
      });
      setFormData(() => ({
        ...formData,
        [e.target.name]: fieldValue.trim(),
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const promiseA = await new Promise((resolve, reject) => {
      resolve(formFieldValidation({ type: "onSubmit", value: formData }));
    });

    if (Object.keys(promiseA).length > 0) {
      setFormError(promiseA);
    } else {
      console.log(formData);
      setIsSubmit(true);
    }
  };

  return (
    <div className="content">
      <h3 className="text-center">FormValidation</h3>
      {isSubmit && (
        <div className="text-primary">
          Signed in successfully
          <pre>{JSON.stringify(formData, undefined, 2)}</pre>
        </div>
      )}

      <div className="row">
        <div className="col-md-4">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={onChangeField}
              />
              {formError?.name && (
                <span className="text-danger">{formError?.name}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={onChangeField}
              />
              {formError?.email && (
                <span className="text-danger">{formError?.email}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={onChangeField}
              />
              {formError?.password && (
                <span className="text-danger">{formError?.password}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="comfirmPass" className="form-label">
                Comfirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="comfirmPass"
                value={formData.comfirmPass}
                onChange={onChangeField}
              />
              {formError?.comfirmPass && (
                <span className="text-danger">{formError?.comfirmPass}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile No
              </label>
              <input
                type="text"
                pattern="[6789][0-9]{9}"
                className="form-control"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={onChangeField}
              />
              {formError?.mobileNumber && (
                <span className="text-danger">{formError?.mobileNumber}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="joinDate" className="form-label">
                Joining Date
              </label>
              <input
                type="date"
                className="form-control"
                name="joinDate"
                value={formData.joinDate}
                onChange={onChangeField}
              />
              {formError?.joinDate && (
                <span className="text-danger">{formError?.joinDate}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="occupation" className="form-label">
                Occupation
              </label>
              <select
                className="form-select"
                name="occupation"
                onChange={onChangeField}
                value={formData.occupation}
              >
                <option value="">Select</option>
                <option value="tester">Tester</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="networkEngineer">Network Engineer</option>
                <option value="ui/ux">UI/UX</option>
              </select>
              {formError?.occupation && (
                <span className="text-danger">{formError?.occupation}</span>
              )}
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={onChangeField}
                    checked={formData.gender === "male"}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={onChangeField}
                    checked={formData.gender === "female"}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={onChangeField}
                    checked={formData.gender === "other"}
                  />
                  <label htmlFor="other">Other</label>
                </div>
                {formError?.gender && (
                  <span className="text-danger">{formError?.gender}</span>
                )}
              </div>
            </div>

            <div className="form-group  mb-3">
              <label htmlFor="gender" className="form-label">
                Language and Tool
              </label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="automationTool"
                    name="languageTool"
                    onChange={onChangeField}
                    checked={formData.languageTool.includes("automationTool")}
                  />
                  <label className="form-check-label">Automation Tool</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="vsCode"
                    name="languageTool"
                    onChange={onChangeField}
                    checked={formData.languageTool.includes("vsCode")}
                  />
                  <label className="form-check-label">Vs Code</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="github"
                    name="languageTool"
                    onChange={onChangeField}
                    checked={formData.languageTool.includes("github")}
                  />
                  <label className="form-check-label">Github</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="scripting"
                    name="languageTool"
                    onChange={onChangeField}
                    checked={formData.languageTool.includes("scripting")}
                  />
                  <label className="form-check-label">Scripting</label>
                </div>
                {formError?.languageTool && (
                  <span className="text-danger">{formError?.languageTool}</span>
                )}
              </div>
            </div>

            <button className="btn btn-secondary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;

// const validationErrors = {};
// switch (true) {
//   case formData.name.trim() === "":
//     validationErrors.name = "name is required.";
//     break;
//   case formData.name.length <= 3:
//     validationErrors.name = "name should be at least 3 characters long.";
//     break;
// Additional validation cases as needed
//   default:
//     break;
// }
// setFormError(validationErrors);

// console.log("Error", Object.keys(formError).length === 0);
// console.log("Values", Object.keys(formData).length !== 0);

// if (
//   Object.keys(formError).length === 0 &&
//   Object.keys(formData).length !== 0
// ) {
//   alert("valid Form");
// } else {
//   alert("Invalid Form");
// }
// let isValidForm = validateForm();
// if (isValidForm) {
//   alert("Valid Form");
// } else {
//   alert("Invalid Form");
// }
// console.log(isValidForm);
// setFormData({ ...initialState, languageTool: [] });

// const validationErrors = {};
// switch (true) {
//   case formData.name.trim() === "":
//     validationErrors.name = "name is required.";
//     break;
//   case formData.name.length < 3:
//     validationErrors.name = "name should be at least 3 characters long.";
//     break;
// Additional validation cases as needed

//   default:
//     break;
// }
// setFormError(validationErrors);

//   const validateForm = (name, value) => {
//     const errors = {};
//     switch (name) {
//       case "name":
//         if (!value) {
//           errors.name = "name is required!";
//   setFormError({ ...formError, name: `name is Required!` });
//         } else {
//           delete formError.name;
//         }
//         break;
//   case "email":
//     if (!value) {
//       setFormError({ ...formError, email: "email is Required!" });
//     } else {
//       delete formError.email;
//     }
//     break;
//   case "password":
//     if (!value) {
//       setFormError({ ...formError, password: "password is Required!" });
//     } else {
//       delete formError.password;
//     }
//     break;
//   case "comfirmPass":
//         if (!value) {
//           setFormError({
//             ...formError,
//             comfirmPass: "comfirmPass is Required!",
//           });
//         } else {
//           delete formError.comfirmPass;
//         }
//         break;
//       default:
//         break;
//     }
//     return errors;
// if (!formData.name) {
//   err.name = "name is Required!";
// }
// if (!formData.email) {
//   err.email = "email is Required!";
// }
// if (!formData.password) {
//   err.password = "password is Required!";
// }
// if (!formData.comfirmPass) {
//   err.password = "comfirmPass is Required!";
// }
// if (!formData.mobileNumber) {
//   err.mobileNumber = "mobileNumber is Required!";
// }
// if (!formData.joinDate) {
//   err.joinDate = "date is Required!";
// }
// if (!formData.occupation) {
//   err.occupation = "occupation is Required!";
// }
// if (!formData.gender) {
//   err.gender = "gender is Required!";
// }
// if (formData.languageTool.length < 1) {
//   err.languageTool = "languageTool is Required!";
// }

// return Object.keys(err).length < 1;
//   };

// formValidation({
//   ...formData,
//   [e.target.name]: fieldValue.trim(),
// });
// switch (true) {
//   case values.name.trim() === "":
//     validationErrors.name = "name is required.";
//     break;
//   case values.name.length < 3:
//     validationErrors.name = "name should be at least 3 characters.";
//     break;
//   case values.email.trim() === "":
//     validationErrors.email = "Email is required.";
//     break;
//   case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email):
//     validationErrors.email = "This is not a valid email format!";
//     break;
//   default:
//     break;
// }
// setFormError(validationErrors);
// if (e.target.value === "" || !e.target.value) {
//   setFormError((prev) => {
//     return { ...prev, [e.target.name]: "Name is required" };
//   });
// } else {
//   setFormError((prev) => {
//     return { ...prev, [e.target.name]: "" };
//   });
// }

// useEffect(() => {
//   if (Object.keys(formError).length === 0 && isSubmit) {
//     console.log("Validatate", formData);
//     setFormData(initialState);
//   }
// }, [formError]);

// let fieldValue = e.target.value;
// formFieldValidation({
//   type: "",
//   name: e.target.name,
//   value: e.target.value,
// });
// setFormData(() => ({
//   ...formData,
//   [e.target.name]: fieldValue.trim(),
// }));
