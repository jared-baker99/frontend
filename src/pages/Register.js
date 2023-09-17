import React from 'react';
import ButtonGroup from '../components/ButtonGroup';

var userEmail;
var userPassword;
var confirmPassword;
const Register = () =>
{
    const doRegister = async (event) => {

        event.preventDefault();

        let obj = {
            email: userEmail.value,
            password: userPassword.value
        }

        let js = JSON.stringify(obj);

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: "POST",
                body: js,
                headers: {'Content-Type': 'application/json' }
            })
            var res = JSON.parse(await response.text());
            if(res.id <= 0) {
                //setMessage('There was an error trying to register.');
            }
            else {
                var user = {
                    firstName: res.name,
                    id: res.id
                };
                localStorage.setItem('user_data', JSON.stringify(user));
                //setMessage('Registered successfully');
                window.location.href = "/";

            }
        }
        catch (e) {
            alert(e.toString());
            return;
        }
    }

    return(
        <div className='UserRegister'>
            <div className='registerInfo'>
                <p>Register here</p>
                <label for="email">Enter your email:   </label>
                <input type="email" id="email" name="email" ref={(c) => userEmail = c } ></input>

                <br></br>

                <label for="password">Create password:   </label>
                <input type='password' id='password' name='password' ref={(c) => userPassword = c } ></input>

                <br></br>

                <label for="password">Confirm password:   </label>
                <input type='password' id='confirmPassword' name='confirmPassword' ref={(c) => confirmPassword = c } ></input>

                <br></br>
            </div>
            <div className='buttons'>
                    <button onClick={doRegister}>Register</button>
                    <button>Login</button>
                </div>
        </div>
    );
};

export default Register;