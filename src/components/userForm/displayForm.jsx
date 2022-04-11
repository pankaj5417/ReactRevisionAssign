import React from "react";
import { useState } from "react";
import { UserFinal } from "./UserFinal";
import { UserForm } from "./userForm";
import { UserInfo } from "./UserInfo";

export const DisplayForm = () => {
  let [step, setStep] = useState(0);

  const [values, setValues] = useState({
    name: "",
    age: "",
    dateOfBirth: "",
    stateOfResidence: "",
    address: "",
    pincode: "",
   
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const steps = ["UserForm", "UserInfo"];

  const stepfun = () => {
    switch (step) {
      case 0:
        return <UserForm values={values} handleChange={handleChange} />;
      case 1:
        return <UserInfo values={values} handleChange={handleChange} />;

      case 2:
        return <UserFinal values={values} handleChange={handleChange} />;
      default:
        return null;
    }
  };
  console.log(values, step);

  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
      
      {stepfun()}

        </form>

      <button  onClick={() => setStep((prev) => prev - 1)}>Back</button>
      <button>save</button>

      <button disabled={step===steps.length-1} onClick={() => setStep((prev) => prev + 1)}>Save</button>
    </div>
  );
};
