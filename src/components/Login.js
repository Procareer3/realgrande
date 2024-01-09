import { useState } from 'react';

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    
    let passChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    let submitHandler = (e) => {
        e.preventDefault();
        console.log("log in info submitted" + email + password)
    }

    return ( 
        <div className='d-flex justify-content-center mt-5'>
            <form className='w-50'>
                <h1>Log In</h1>
                <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
                onChange={emailChangeHandler}
            />

            <label htmlFor="" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={passChangeHandler}
            />
        </div>
        <button className="btn btn-primary" type='submit' onClick={submitHandler}>Submit</button>
    </form>
             
        </div>
       
        
     );
}
 
export default Login;