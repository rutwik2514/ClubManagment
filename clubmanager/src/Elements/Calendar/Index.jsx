
import "../Calendar/Style.css"
import { DAYS } from "./Days"
export const Calendar = () =>{
  
    return (
        <>
        <div id="Wrapper">
            <div id="CalendarHead">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            <h3>Oct 2022</h3>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>

            </div>
            <div id="sevenColorGrid">
                {DAYS.map((day)=>(
                    <div id="headDay">{day}</div>
                ))}
            </div>
        </div>

        </>
    )
}