import { useState } from 'react';


const SignUp = () => {
    let [formObj, setFormObj] = useState({name: "", email:"", password:"", confirm:"", phone:""});
    
    let changeHandler = (e) => {
        setFormObj({...formObj, [e.target.name]:e.target.value});
    }
   
    let submitHandler = (e) => {
        e.preventDefault();
        console.log(formObj)
    }

    return ( 
         <div className='d-flex justify-content-center mt-5'>
            <form className='w-50'>
            <h1>Sign Up</h1>
                <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={changeHandler}
                required
            />
            <label htmlFor="" className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
                onChange={changeHandler}
                required
            />
            
             <label htmlFor="" className="form-label">Phone</label>
            <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={changeHandler}
                required
            />

            <label htmlFor="" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={changeHandler}
                required
            />
            <label htmlFor="" className="form-label">Confirm Password</label>
            <input
                type="password"
                className="form-control"
                name="cpassword"
                id="cpassword"
                onChange={changeHandler}
                required
            />
            </div>
            <button className="btn btn-primary" type='submit' onClick={submitHandler}>Submit</button>
        </form>    
    </div>
       
    );
}
 
export default SignUp;