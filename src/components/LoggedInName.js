import React from 'react';
function LoggedInName()
{

const doLogout = event =>
{
event.preventDefault();
localStorage.removeItem("user_data")
window.location.href = '/';
};
return(
<div id="loggedInDiv">
<span id="userName">Logged In As 
</span><br />
<button type="button" id="logoutButton" class="buttons"
onClick={doLogout}> Log Out </button>
</div>
);
};
export default LoggedInName;