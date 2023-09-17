
import React from 'react';

const MainPage = () =>
{
    var loginName;
    var loginPassword; 

    const doLogin = async event =>
    {
        event.preventDefault();
        alert("YIPPIE" + loginName.value + loginPassword.value);
        
        window.location.href = "/Home"
    }

    return(
        <div className="mystyle" >

         <h1 className="appname">
            InsurFind
            </h1>
                <p className="slogan">empower your future with insurance</p>
                
        
        <div className="loginbox"> 
        <form onSubmit={doLogin}>
        <span id="inner-title">Login:</span><br />
        <input type="text" id="loginName" placeholder="Username"
        ref={(c) => loginName = c}
        /><br />
        <input type="password" id="loginPassword"
        placeholder="Password" ref={(c) => loginPassword = c}
        /><br />
        <input type="submit" id="loginButton"
        value = "Do It"
        onClick={doLogin} />
        </form>
        <span id="loginResult"></span>
        </div>
        </div>
    );
};

export default MainPage;