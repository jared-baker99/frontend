import React from 'react';
import '../Styles/Styles.css'



const HomePage = () =>
{
    // let _ud = localStorage.getItem('user_data');
    // let ud = JSON.parse(_ud);
    // let userId = ud.id;
    // let car = ud.carIn;
    // let home = ud.homeIn;
    // let rent = ud.rentIn;
    // let insurer = ud.insureCon;

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
        <h1 className="appname">
                InsurFind
            </h1>
            <p className="slogan">empower your future with insurance</p>
            <div className='Row'>
                    <h1 className='insurancetext'></h1>
                    <button className='logout' onClick={doLogout}>logout</button>
                <div className='Box'>
                    <div className='circle'>
                        <h2 className='typetext'>Car</h2>
                        <p className='moneytext'></p>    
                    </div>
                        <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                        </div>
                    <p className='informationtext'> <li>Car insurance is a type of insurance that provides protection against economic loss to an insured from bodily injury or property damage caused by a car accident. In Florida, car insurance is required by law, and vehicle owners must have a minimum amount of insurance coverage for Personal Injury Protection (PIP) and Property Damage Liability (PDL) automobile insurance.</li> <li> No-fault auto insurance laws: Florida is one of 12 no-fault states in the US, which means that regardless of who is at fault in an accident, each driver's insurance covers their own injuries or medical expenses and those of their passengers4. Having car insurance is necessary to comply with these laws and ensure that you are financially protected in the event of an accident.</li></p>
                </div>
                <div className='Box'>
                    <div className='circle'>
                        <h2 className='typetext'>Home</h2>
                        <p className='moneytext'></p>    
                    </div>
                    <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                    </div>
                    <p className='informationtext'> <li> Homeowners insurance, also commonly called homeowner's insurance, is a type of property insurance that covers a private residence1. It provides financial protection against disasters and covers both damage to one's property and liability for any injuries and property damage caused by the owner or members of his/her family to other people</li><li>
Weather-related risks: Florida is prone to hurricanes, tropical storms, and flooding, which can cause significant damage to homes and property. Home insurance can help protect against these risks by covering repairs or replacement costs. </li>
<li>Legal requirements: Mortgage lenders usually require homeowners' insurance as part of the mortgage terms3. This means that if you have a mortgage on your home, you will likely need to have home insurance.</li></p>

                </div>
                <div className='Box'>
                    <div className='circle'>
                        <h2 className='typetext'>Life</h2>
                        <p className='moneytext'></p>    
                    </div>
                    <div className='Learnbutton'>
                            <button className= 'learnbutton' onClick={doLearn}>Learn More</button>
                        </div>
                    <p className='informationtext'> <li>Life insurance is a contract between a life insurance company and a policy owner. It guarantees that the insurer pays a sum of money to one or more named beneficiaries when the insured person dies in exchange for premiums paid by the policyholder during their lifetime</li>
                    <li> Financial Protection: Life insurance provides financial protection for your family's future, covering expenses such as medical bills, funeral costs, debts, mortgage payments, and tuition</li>
                    <li> Peace of Mind: Life insurance brings peace of mind by providing financial stability during difficult times, such as covering funeral costs and immediate expenses</li>
                    </p>
                </div>
            </div>
        </div>
    );
    
};
    

export default HomePage;