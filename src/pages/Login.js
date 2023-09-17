import React from 'react';

const MainPage = () =>
{
    var loginEmail;
    var loginPassword; 

    const doLogin = async event => {
        event.preventDefault();
        var obj = {
            email:loginEmail.value,
            password:loginPassword.value
        };
        var js = JSON.stringify(obj);
        try {
            const response = await fetch('http://localhost:5000/api/login', { 
                method:'POST',
                body:js,
                headers:{'Content-Type': 'application/json' }
            });
            console.log(js);
            var res = JSON.parse(await response.text());
            if( res.id <= 0 ) {
                //setMessage('User/Password combination incorrect');
            }
            else {
                var user = {
                    id:res.id,
                    carIn:res.car,
                    homeIn:res.home,
                    rentIn:res.rent
                }
                localStorage.setItem('user_data', JSON.stringify(user));
                //setMessage('');
                window.location.href = '/home';
                console.log(localStorage.getItem('user_data'));
            }
        }
        catch(e) {
            alert(e.toString());
            return;
        }
    };

    return(
        <div className="mystyle" >
            <h1 className="appname">
                InsurFind
            </h1>
            <p className="slogan">empower your future with insurance</p>
            <div className="loginbox"> 
                <form onSubmit={doLogin}>
                    <span id="inner-title">Login:</span><br />
                    <input type="text" id="loginName" placeholder="Username" ref={(c) => loginEmail = c}/><br />
                    <input type="password" id="loginPassword"placeholder="Password" ref={(c) => loginPassword = c}/><br />
                    <input type="submit" id="loginButton" value = "Do It" onClick={doLogin} />
                </form>
                <span id="loginResult"></span>
            </div>
        </div>
    );
};

export default MainPage;