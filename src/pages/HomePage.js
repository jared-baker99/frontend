import React from 'react';
import '../Styles/Styles.css'


const HomePage = () =>
{

    const doLearn = async (event) => {
        event.preventDefault();
        window.location.href = "/Learn"
    }
    return(
        <div className='UserRegister'>
            <div className='Row'>
                <div className='Box'>
                    <h1 className='insurancetext'> StateFarm</h1>
                    <div className='circle'>
                        <h2 className='typetext'>Car</h2>
                        <p className='moneytext'>240$</p>    
                    </div>
                        <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                        </div>
                </div>
                <div className='Box'>
                    <h1 className='insurancetext'> Progressive</h1>
                    <div className='circle'>
                        <h2 className='typetext'>Home</h2>
                        <p className='moneytext'>120$</p>    
                    </div>
                    <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                    </div>
                </div>
                <div className='Box'>
                <h1 className='insurancetext'> Geico</h1>
                    <div className='circle'>
                        <h2 className='typetext'>Rentor</h2>
                        <p className='moneytext'>80$</p>    
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