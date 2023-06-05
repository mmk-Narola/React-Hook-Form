// Building a Sign-up form in React.js
// Let’s build a sign-up form and validate the fields to learn more. Let’s create a component with a few fields to accept the inputs from a user to sign up. Listing 3 shows the initial state of the component with the fields and the state:

import React, { useState } from "react";
import { SampleInput } from "./SampleInput";
import logo from "./logo.svg";
import "./App.css";
import {
  minMaxLength,
  validEmail,
  passwordStrength,
  userExists,
} from "./validations";

function App() {
  const [user, setUser] = useState({});
  const [formErrors, setFormErrors] = useState({});

  return (
    <div className="App container col-6">
      <h3>New User Registration Form</h3>
      <form noValidate>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            noValidate
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            noValidate
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="confirmpassword"
            noValidate
          />
        </div>
        <div className="mb-3">
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
}

// Let’s add event handlers to all these input controls. It is possible to create a single function and assign it to all the controls. The function has to assign values to the respective state fields based on the source input element.

// Following is the function to be used for the event handler:

function handleChange(e) {
  const { name, value } = e.target;
  let formErrors = this.state.formErrors;

  switch (name) {
    case "firstName":
      setUser({ ...user, firstName: value });

      break;
    case "lastName":
      setUser({ ...user, lastName: value });
      break;
    case "email":
      setUser({ ...user, email: value });

      break;
    case "password":
      setUser({ ...user, password: value });

      break;
    case "confirmpassword":
      setUser({ ...user, confirmpassword: value });

      break;
    default:
      break;
  }
}
// Listing 4: Event handler for input fields

// The event handler can be assigned on the input elements to handle the onBlur event. Alternatively, the onKeyUp event may also be used but it will keep assigning the state on every key stroke. To avoid that we are going to use onBlur. Listing 5 shows how to assign it to one of the fields:

<input
  className="form-control"
  placeholder="First Name"
  type="text"
  name="firstName"
  noValidate
  onBlur={handleChange}
/>;
// Listing 5: Input with event handler

// Now the value entered in the text box would get updated in the state field when a user moves the focus away from the input element accepting the first name. The same change can be applied on the other input elements.

// To see if the values are assigned to the state, the state object can be printed on a console when the form is submitted.

// With this, the form is ready for accepting inputs and passing them on to the application.

// Let’s add now validations to it!

/*

Form Validations in React.js
The values received in the input fields can be validated on the change event handler. We will be adding the following validations to the sign-up form:

● First name and last name have to contain at least 3 characters

● Password has to contain at least 6 characters

● E-mail ID has to be valid

● Confirm password has to match password

● Password should be strong

● E-mail ID has to be unique

Note: The validations added here would be running on the client side. It is important to perform these validations on the server as well, as client-side validations can get compromised by hackers or JavaScript could be turned off in the browsers.

Let’s create generic helper functions to perform these validations. Listing 5 shows the functions to check minimum length, format of the e-mail ID and to check if the e-mail ID is unique:
*/


    let result = !text || text.length < minLength;
    if(maxLength)
        result = result || text.length < minLength;
    return result;
// }
 
export function validEmail(text) {
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
     
    return !regex.test(text);
}
 
let registeredUsers = [
    'ravi@kiran.com',
    'mail@myblog.in',
    'contact@lucky.com'
];
 
 
export function userExists(email) {
    return new Promise(resolve => {
        setTimeout(() => {
            if(registeredUsers.findIndex(u => u === email) !== -1) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
// Listing 5: Validation functions

// The function userExists in Listing 5 returns a promise and it checks for the existence of the e-mail ID in a hard-coded array. In real applications, this has to be replaced with an API call.

// Writing logic to check strength of a password is a big task. Let’s take the help of a library to do that. Install the package zxcvbn using the following command:

// > npm install zxcvbn
// This library exposes a function that accepts the password string and returns a result. We can determine whether the password is strong or not, using the score it returns. Listing 6 imports the library and performs the validation:

import * as zxcvbn from 'zxcvbn';
 
export function passwordStrength(text) {
    let result = zxcvbn(text);
    return result.score < 3;
}
// Listing 6: Password strength validation

// Now let’s use these validations in the onBlur event handler. Listing 7 shows the validation of the field for the first name:

case 'firstName':
  if (minMaxLength(value, 3)) {
    currentFormErrors[
      name
    ] = `First Name should have minimum 3 characters`;
  } else {
    delete currentFormErrors[name];
  }
  break;
// Listing 7: Validation for first name

// The Last name can be validated in a similar way. As Listing 7 shows, the error message to be shown is set to the formErrors object. This object will be used to show the validation messages and to disable the submit button. When the field is valid, it deletes the error of the field from the object.

// The E-mail ID needs to be checked for format and for uniqueness. As the userExists validation function returns a promise to simulate the behavior of an API call, the validity has to be set in the success callback of the promise. Listing 8 shows this validation:

case 'email':
  if (!value || validEmail(value)) {
    currentFormErrors[name] = `Email address is invalid`;
  } else {
    userExists(value).then((result) => {
      if (result) {
        currentFormErrors[name] =
          'The email is already registered. Please use a different email.';
      } else {
        delete currentFormErrors[name];
      }
    });
}
// Listing 8: E-mail validation

// The password field has to be checked for length and for strength. A value entered in the Confirm Password field has to be matched with password field and if it doesn’t match, an error has to be assigned.

// The field Confirm Password needs to be validated when the password field is changed as well, as the user may decide to change the password entered, before submitting. The following snippet shows the validation of the two password fields:

case 'password':
  if (minMaxLength(value, 6)) {
    currentFormErrors[name] = 'Password should have minimum 6 characters';
  } else if (passwordStrength(value)) {
    currentFormErrors[name] =
      'Password is not strong enough. Include an upper case letter, a number or a special character to make it strong';
  } else {
    delete currentFormErrors[name];
    setUser({
      ...user,
      password: value,
    });
    if (user.confirmpassword) {
      validateConfirmPassword(
        value,
        user.confirmpassword,
        currentFormErrors
      );
    }
  }
  break;
 
case 'confirmpassword':
  let valid = validateConfirmPassword(
    user.password,
    value,
    currentFormErrors
  );
  if (valid) {
    setUser({ ...user, confirmpassword: value });
  }
 break;
// Listing 9: Validation of Password and confirm password fields

// As the confirm password validation has to be performed twice, it is better to put it in a separate function. The following snippet shows the function validateConfirmPassword:

function validateConfirmPassword(
  password,
  confirmpassword,
  formErrors
) {
  formErrors = formErrors || {};
  if (password !== confirmpassword) {
    formErrors.confirmpassword =
      'Confirmed password is not matching with password';
    return false;
  } else {
    delete formErrors.confirmpassword;
    return true;
  }
}
// Listing 10: validateConfirmPassword function

// The last change to be made is to set validations in the state. It is done in the following snippet:

// setFormErrors(currentFormErrors);
// Now that the validations are in place, the user needs to be notified about them. Let’s apply some styles on the fields to show that the field has an invalid value. The following snippet modifies the style of the field for first name:

<input
  className={
    formErrors && formErrors.firstName
      ? 'form-control error'
      : 'form-control'
  }
  placeholder='First Name'
  type='text'
  name='firstName'
  noValidate
  onBlur={handleChange}
/>
// Listing 11: Error style applied to first name

// The attribute className is modified to assign the error class when the field has a validation error. The same change can be applied to other fields also. The CSS class error is set to the following style to show a red border on the input elements:

.app   input.error {
  border: 1px solid red;
}
// Listing 12: Error style

// There are different ways to show error messages. They can be either shown below the input elements, listed in an unordered list, displayed as tooltips on the input elements or any other way your UX designer suggests.

// In the demo, we will show it as an unordered list. For this, we need to iterate over the fields of formErrors object and print the messages in a list. Listing 12 shows how to achieve this:

<ul>
  {Object.entries(formErrors || {}).map(([prop, value]) => {
    return (
      <li className='error-message' key={prop}>
        {value}
      </li>
    );
  })}
</ul>
// Listing 12: List of errors

// The only pending todo now is to disable the submit button when the form has errors. This can be done by checking if formErrors has any entries. See Listing 13.

// <button
//   type='submit'
//   disabled={Object.entries(formErrors || {}).length > 0}
// >
//   Create Account
// </button>
// Listing 13: Disabling the button

// Now when there are invalid values, the form will start showing errors and marking the fields with a red border. A state of the form is shown in Figure 4:

