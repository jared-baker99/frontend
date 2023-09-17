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
                    <button className="qb1" onClick={Statefarm}>Get Quote</button>
                </div>

                <div className="Box4">
                    <h1>Progressive</h1>
                    <button className="qb2" onClick={Progressive}>Get Quote</button>
                </div>

                <div className="Box4">
                    <div className="headingtext">
                        <h1>Geico</h1>
                        <button className="qb3" onClick={Geico}>Get Quote</button>
                    </div>
                </div>
            </div>
            <div className='Box3'>
                <div>
                    <h1 >Partial vs Full Insurance</h1>
                </div>
            </div>
        </div>
    );
};
export default Learn