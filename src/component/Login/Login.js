import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className= "login">
            <div >
                
            
           
                <form >
                    <h2>Log In</h2>
                    <input type="email" name="email" id="" placeholder = "Your Email" />
                    <br />
                    <input type="password" name="pass" placeholder="Password" id="" />
    
                    <br />
    
                    <input type="submit" value="Log In" />
                    <br />
                     <Link to ="/reg">Create An Account</Link> 
                    <br />
                    <div>
                        ------ Or ------
                    </div>
                    <button className="btn"> SignIn With Google</button>
    
                </form>
                </div>
        </div>
    );
};

export default Login;