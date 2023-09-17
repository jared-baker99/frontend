import React from 'react';
import '../Styles/Styles.css'



const HomePage = () =>
{
    let _ud = localStorage.getItem('user_data');
    let ud = JSON.parse(_ud);
    let userId = ud.id;
    let car = ud.carIn;
    let home = ud.homeIn;
    let rent = ud.rentIn;
    let insurer = ud.insureCon;

    const doLogout = async (event) =>
    {
        event.preventDefault();
        localStorage.removeItem("user_data");
        window.location.href = '/';
    };

    const doLearn = async (event) => {
        event.preventDefault();
        window.location.href = "/Learn"
    }

    return(
        <div className='UserRegister'>
        
            <div className='Row'>
                    <h1 className='insurancetext'> {insurer}</h1>
                    <button className='logout' onClick={doLogout}>logout</button>
                <div className='Box'>
                    <div className='circle'>
                        <h2 className='typetext'>Car</h2>
                        <p className='moneytext'>{car}</p>    
                    </div>
                        <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                        </div>
                </div>
                <div className='Box'>
                    <div className='circle'>
                        <h2 className='typetext'>Home</h2>
                        <p className='moneytext'>{home}</p>    
                    </div>
                    <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                    </div>
                </div>
                <div className='Box'>
                    <div className='circle'>
                        <h2 className='typetext'>Rentor</h2>
                        <p className='moneytext'>{rent}</p>    
                    </div>
                    <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                        </div>
                </div>
            </div>
        </div>
    );
    
};
    

export default HomePage;