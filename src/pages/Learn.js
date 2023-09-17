import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useHref } from "react-router-dom";


const Learn = () =>
{
    const Statefarm = async (event) => {
        event.preventDefault();
        window.open("https://www.statefarm.com/","_blank");
    }
    const Progressive = async (event) => {
        event.preventDefault();
        window.open("https://www.progressive.com/","_blank");
    }
    const Geico = async (event) => {
        event.preventDefault();
        window.open("https://www.geico.com/","_blank");
    }

    return(
        <div className="learnpage">
            <div className='Box2'>

                <div className="Box4">
                    <h1>State Farm</h1>
                    <button className="quote" onClick={Statefarm}>Get Quote</button>
                    <h3>&emsp;Full Coverage &emsp; &emsp; &emsp; &emsp; &emsp;| &emsp; &emsp; &emsp; &emsp; &emsp;Partial Coverage</h3>
                    <h4>&emsp;&emsp;&emsp;&emsp;165$ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;120$</h4>

                </div>

                <div className="Box4">
                    <h1>Progressive</h1>
                    <button className="quote" onClick={Progressive}>Get Quote</button>
                    <h3>&emsp;Full Coverage &emsp; &emsp; &emsp; &emsp; &emsp;| &emsp; &emsp; &emsp; &emsp; &emsp;Partial Coverage</h3>

                    <h4>&emsp;&emsp;&emsp;&emsp;228$ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;177$</h4>
                </div>

                <div className="Box4">
                    <div className="headingtext">
                        <h1>Geico</h1>
                        <button className="quote" onClick={Geico}>Get Quote</button>
                        <h3>&emsp;Full Coverage &emsp; &emsp; &emsp; &emsp; &emsp;| &emsp; &emsp; &emsp; &emsp; &emsp;Partial Coverage</h3>
                        <h4>&emsp;&emsp;&emsp;&emsp;161$ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;112$</h4>

                    </div>
                </div>
            </div>
            <div className='Box3'>
                <div>
                    <h1 >Partial vs Full Insurance</h1>
                    <p>Insurance is critical in providing financial security to individuals and businesses. One of the most fundamental distinctions in insurance is between partial and full coverage. In the event of an unexpected event or accident, these two terms represent different levels of protection and financial responsibility. We will examine the key differences between partial and full coverage insurance in this comprehensive guide, allowing you to make informed decisions about your insurance needs..</p>
                    <h2> Partial Coverage</h2>
                    <p>Partial coverage insurance, often referred to as liability insurance, provides a limited level of protection in specific areas. It is commonly associated with policies like auto insurance, home insurance, and business insurance. The primary characteristic of partial coverage is that it covers only certain aspects or parties involved in an incident, leaving the policyholder responsible for the rest.</p>
                    <h2>Full Coverage</h2>
                    <p>Full coverage insurance is a term often used to describe comprehensive insurance policies that offer a higher level of protection by combining multiple types of coverage into one package. This level of coverage is designed to provide extensive financial support in a wide range of scenarios.</p>

                </div>
            </div>
        </div>
    );
};
export default Learn