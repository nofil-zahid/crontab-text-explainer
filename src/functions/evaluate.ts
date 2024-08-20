import { evaluateDayOfMonth } from "./helper/evaluateDayOfMonth";
import { evaluateDayOfWeek } from "./helper/evaluateDayOfWeek";
import { evaluateHour } from "./helper/evaluateHour";
import { evaluateMinute } from "./helper/evaluateMinute";
import { evaluateMonth } from "./helper/evaluateMonth";


export const evaluateCronString = (cronIn: string[]) => {
    // 0. minute
    // 1. hour
    // 2. day of month
    // 3. month
    // 4. day of week
    
    let minute="", hour="", day_of_month="", month="", day_of_week="", resultant=""
    let colonInTime = false;
    
    if (cronIn.filter(c => c == '*').length === 5) return "At every minute.";

    if ((cronIn[0].includes("-") || cronIn[0].includes(",")) || (cronIn[1].includes("-") || cronIn[1].includes(",")) || (cronIn[0].includes("*") || cronIn[1].includes("*"))) {
        minute = evaluateMinute(cronIn[0]);
        hour = evaluateHour(cronIn[1]);
    }
    else {
        minute = Number.parseInt(cronIn[0])>10 || cronIn[0][0]==="0" ? cronIn[0] : "0"+cronIn[0] ;
        hour = Number.parseInt(cronIn[1])>10 || cronIn[1][0]==="0" ? cronIn[1] : "0"+cronIn[1] ;

        if (cronIn[0].length==1 && cronIn[0]=="0") minute = "00";
        if (cronIn[1].length==1 && cronIn[1]=="0") hour = "00";

        colonInTime = true;
    }
    day_of_month = evaluateDayOfMonth(cronIn[2]);
    month = evaluateMonth(cronIn[3]);
    day_of_week = evaluateDayOfWeek(cronIn[4]);

    if (colonInTime) {
        resultant = "At "+hour+":"+minute+day_of_month+day_of_week+month;
    }
    else {
        resultant = "At "+minute+hour+day_of_month+day_of_week+month;
    }

    return resultant;
}

