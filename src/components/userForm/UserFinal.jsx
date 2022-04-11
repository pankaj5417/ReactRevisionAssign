const { useState } = require("react");

export const UserFinal = ({values,handleChange,step,setStep}) => {
    const Input=[
        {
            

    }
]
 
  
  return (
    <>
      <select>
        type="countryCode"
        name="countryCode"
        required={true}
        value={values.countryCode}
        onChange={handleChange}
        <option value="91">+91</option>
        <option value="1">+1</option>
        </select>
      <input
        type="Number"
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={handleChange}
      />

      <input
        type="checkbox"
        name="acceptTermsAndCondition"
        value={values.firstname}
        onChange={handleChange}
        />
     
    </>
  );
};
