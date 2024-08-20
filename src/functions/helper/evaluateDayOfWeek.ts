
const week = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

export const evaluateDayOfWeek = (dow: string) => {
    let result = " on ";
    let daysInWeek = [];

    if (dow.length===0 || dow==="*" || dow===" ") {
        return "";
    }

    if (dow.startsWith("*/")) {
        dow = dow.slice(2);
        result = dow.includes("-") ? " day-of-week of " : " every day-of-week of "
    }

    if (dow.includes("-")) {
        daysInWeek = dow.split("-");
        if (daysInWeek.length != 2) return "";
        const start = Number.parseInt(daysInWeek[0]);
        const end = Number.parseInt(daysInWeek[1]);
        if ((start >= end) || (start>6) || (end>6)) return "";
        result = result + "every day-of-week from "+week[start]+" through "+week[end];
        return result;
    }

    daysInWeek = dow.split(",");

    if (daysInWeek.length == 1) {
        if (Number.parseInt(dow) > 0 && Number.parseInt(dow)<8)
            result = result + week[Number.parseInt(dow)];
        else
            result = "";
    }
    else {
        let val = 0;
        for (let i=0; i<daysInWeek.length; ++i) {
            val = Number.parseInt(daysInWeek[i]);
            if (val<0 || val>6) return "";
            if (i == daysInWeek.length-1) {
                result = result + "and " + week[val];
            }
            else {
                result = result + week[val] + (i===daysInWeek.length-1 ? ", " : " ");
            }
        }
    }

    return result;
}