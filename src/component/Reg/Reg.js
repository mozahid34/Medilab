import React from 'react';

const Reg = () => {
    return (
        <div className="reg">
            <h6>New to MediLab</h6>
            <h6>Create an Account</h6>
            <form >
                <input type="text"  name="name" placeholder="Name: " />
                <br />
                <input type="email" name="email" placeholder="Email: " id="" />

                <br />

                <input type="password" name="pass" placeholder="set a password" id="" />

                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Reg;