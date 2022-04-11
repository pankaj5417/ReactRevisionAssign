import "./UserForm.css"

const { useState } = require("react");

export const UserInfo = ({values,handleChange}) => {
 

  
  return (
    <>
     

      <input
        type="text"
        name="stateOfResidence"
        value={values.stateOfResidence}
        onChange={handleChange}
      /> 
      <br />
        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
        <br />
      <input
        type="text"
        name="pincode"
        value={values.pincode}
        onChange={handleChange}
      />
    </>
  );
};
