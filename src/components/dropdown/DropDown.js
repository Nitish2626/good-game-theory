import { useState } from "react";
import downArrow from "../../icons/down-arrow.png";

export const DropDown = (props) => {

    const [rotateArrow,setRotateArrow]=useState(0);

    const rotate=()=>{
        setRotateArrow((prev)=> prev===0 ? prev-180 : 0);
        props.click((prev)=>!prev)
    }

    return (
        <section className="flex items-center justify-between rounded-md px-2 my-3 shadow-[1px_1px_10px_0_black] hover:shadow-none" onClick={rotate}>

            <h1 className="text-lg font-semibold">{props.heading}</h1>
            <img src={downArrow} style={{ rotate: `${rotateArrow}deg` }} className={`w-4 h-4 transition-all duration-200`}></img>

        </section>
    );
};

