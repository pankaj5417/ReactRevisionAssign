import "./UserForm.css"
 export const UserForm=({values,handleChange})=>{


    const Input=[
        {
            type:"text",
            name:"name",
            placeholder:"Name",
           // errorMessage:"Name is required",
            pattern:"",
            
           
           },
           {
            type:"number",
            name:"age",
            placeholder:"Age",
            errorMessage:"",
           
           
           },
           {
            type:"date",
            name:"dateOfBirth",
            placeholder:"D.O.B",
            errorMessage:"",
           
           
           }
]
  return (
    <>
    <form action="">
        {
            Input.map(inp=>(
                <>
                <input {...inp} value={values[inp.name]} onChange={handleChange}  />
                <br />
                <span>{inp.errorMessage}</span>
                </>
            )

            )
        }
      {/* <input
        type="email"
        name="email"
        
        pattern={"/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/"}
        required={true}
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        pattern={"/(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/"}
        value={values.password}
        onChange={handleChange}
      /> */}

    </form>

     
          
    </>
  );
};
