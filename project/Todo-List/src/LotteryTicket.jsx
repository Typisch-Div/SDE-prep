import { useState } from "react";
import "./Lottery.css";
import { genticket,sum } from "./helper";
export default function Lottery(){
    let [ticket,setTickit] = useState(genticket(3));
    let iswinning = sum(ticket) ===15;
    let buyticket=()=>{
        setTickit(genticket(3));
        };

    
    return(
        <div>
            <h1>Lottery Ticket!</h1>
            <div className="Ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
                <br />
                
                
            </div>
            <button onClick={buyticket}>Buy New Ticket</button>
            <h3>{iswinning && "CONGRATS U WON"}</h3>
        </div>
    );
}