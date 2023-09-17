import React from 'react';
import '../Styles/Styles.css'


const HomePage = () =>
{
    return(
        <div className='UserRegister'>
            <div className='Row'>
                <div className='Box'>
                    <h1 className='insurancetext'> StateFarm</h1>

                    <div className='circle'>
                        <h2 className='typetext'>Car</h2>
                        <p className='moneytext'>240$</p>    
                    </div>
                </div>
                <div className='Box'>
                <div className='circle'>
                        <h2 className='typetext'>Home</h2>
                        <p className='moneytext'>120$</p>    
                    </div>
                </div>
                <div className='Box'>
                <div className='circle'>
                        <h2 className='typetext'>Rentor</h2>
                        <p className='moneytext'>80$</p>    
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default HomePage;